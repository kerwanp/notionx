import { plainToInstance } from 'class-transformer';
import PQueue from 'p-queue';
import pRetry, { AbortError } from 'p-retry';

import { Database } from './classes/database';
import { normalizeDatabaseSchema } from './helpers/normalize-database-schema';
import { normalizeFilters } from './helpers/normalize-filters';
import { normalizeSorts } from './helpers/normalize-sorts';
import { deserializePage } from './helpers/serialize';
import { DatabaseSchema, QueryOptions } from './types/database';
import { PageWithProperties } from './types/page';

export type ClientOptions = {
  /**
   * Authentication token.
   * Can be an Internal Integration Token, Public Integration Token or Access Token.
   *
   * @example "secret_DiLCPjimH8oFAF5KcMFYC3Memobo3RxByoiYPqdEimH"
   */
  auth: string;

  /**
   * Notion API Url.
   *
   * @default https://api.notion.com
   */
  apiUrl?: string;

  /**
   * Notion API Version.
   *
   * @default v1
   */
  apiVersion?: 'v1';

  /**
   * Notion version.
   *
   * @example 2022-06-28
   */
  notionVersion?: '2022-06-28';
};

export class Client {
  queue: PQueue;

  constructor(private options: ClientOptions) {
    this.queue = new PQueue({ interval: 100, intervalCap: 4 });
  }

  async database(id: string): Promise<Database> {
    const response = await this.request(`/databases/${id}`);
    return plainToInstance(Database, response, {
      excludeExtraneousValues: true,
    });
  }

  async queryDatabase<S extends DatabaseSchema>(
    databaseId: string,
    schema: S,
    options?: QueryOptions<S>
  ): Promise<PageWithProperties<S>[]> {
    const normalizedShema = normalizeDatabaseSchema(schema);
    const normalizedFilters = normalizeFilters(
      normalizedShema,
      options?.filter
    );
    const normalizedSorts = normalizeSorts(normalizedShema, options?.sorts);

    const { results } = await this.request(`/databases/${databaseId}/query`, {
      method: 'POST',
      body: JSON.stringify({
        filter: normalizedFilters,
        sorts: normalizedSorts,
      }),
    });

    return results.map((result: any) =>
      deserializePage(this, normalizedShema, result)
    );
  }

  async page<S extends DatabaseSchema>(
    pageId: string,
    schema: S
  ): Promise<PageWithProperties<S>> {
    const normalizedSchema = normalizeDatabaseSchema(schema);
    const result = await this.request(`/pages/${pageId}`);
    return deserializePage(this, normalizedSchema, result);
  }

  /**
   * Request the Notion API.
   * Include a queuing and retrying system to respect Rate Limiting.
   */
  request(path: string, init?: RequestInit) {
    return this.queue.add(() =>
      pRetry(
        async () => {
          const response = await fetch(
            `${this.options.apiUrl ?? 'https://api.notion.com'}/${
              this.options.apiVersion ?? 'v1'
            }${path}`,
            {
              ...init,
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.options.auth}`,
                'Notion-Version': this.options.notionVersion ?? '2022-06-28',
              },
            }
          );

          if (!response.ok) {
            /**
             * TODO: Add retryable errors
             */
            if ([0].includes(response.status)) {
              throw new Error('TODO');
            }

            throw new AbortError(await response.text());
          }

          return response.json();
        },
        {
          retries: 5,
          onFailedAttempt: async () =>
            new Promise((res) => setTimeout(res, 1000)),
        }
      )
    ) as Promise<any>;
  }
}

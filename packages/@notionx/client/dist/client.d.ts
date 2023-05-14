import PQueue from 'p-queue';
import { Database } from './classes/database';
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
export declare class Client {
    private options;
    queue: PQueue;
    constructor(options: ClientOptions);
    database(id: string): Promise<Database>;
    queryDatabase<S extends DatabaseSchema>(databaseId: string, schema: S, options?: QueryOptions<S>): Promise<PageWithProperties<S>[]>;
    page<S extends DatabaseSchema>(pageId: string, schema: S): Promise<PageWithProperties<S>>;
    /**
     * Request the Notion API.
     * Include a queuing and retrying system to respect Rate Limiting.
     */
    request(path: string, init?: RequestInit): Promise<any>;
}
//# sourceMappingURL=client.d.ts.map
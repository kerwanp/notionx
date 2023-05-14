import { ClassConstructor, plainToInstance } from 'class-transformer';
import { entries } from 'lodash';

import { Page } from '../classes/page';
import { Client } from '../client';
import { DatabaseSchema, NormalizeDatabaseSchema } from '../types/database';
import { PageWithProperties } from '../types/page';

export function deserialize<T extends { client: Client }, V>(
  client: Client,
  cls: ClassConstructor<T>,
  plain: V[]
): T[];
export function deserialize<T extends { client: Client }, V>(
  client: Client,
  cls: ClassConstructor<T>,
  plain: V
): T {
  const instance = plainToInstance(cls, plain);
  instance.client = client;
  return instance;
}

export function deserializePage<S extends DatabaseSchema>(
  client: Client,
  schema: NormalizeDatabaseSchema<S>,
  data: any
): PageWithProperties<S> {
  const page = deserialize(client, Page, data) as any;

  for (const [key, config] of entries(schema)) {
    let property;
    if ('name' in config) {
      property = data.properties[config.name];
    } else {
      property = Object.values(data.properties).find(
        (p: any) => p.id === config.id
      ) as any;
    }

    if (!property)
      throw new Error(`Property "${key}" does not exist in the database"`);

    page[key] = property[config.type];
  }

  return page;
}

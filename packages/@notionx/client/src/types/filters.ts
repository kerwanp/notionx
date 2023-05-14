import { Jsonify, RequireExactlyOne } from 'type-fest';

import { FILTER_CLASSES_MAPPING } from '../classes/contants';
import { DatabaseSchema, NormalizeDatabaseSchema } from './database';
import { PropertyType } from './properties';

export type PropertyFilter<T extends PropertyType> =
  T extends keyof typeof FILTER_CLASSES_MAPPING
    ? (typeof FILTER_CLASSES_MAPPING)[T]['prototype']
    : never;

export type Filter<S extends DatabaseSchema> = RequireExactlyOne<
  { or: Filter<S>[]; and: Filter<S>[] } & {
    [key in keyof NormalizeDatabaseSchema<S>]: RequireExactlyOne<
      Jsonify<PropertyFilter<NormalizeDatabaseSchema<S>[key]['type']>>
    >;
  }
>;

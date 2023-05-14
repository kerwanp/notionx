import { DatabaseSchema, NormalizeDatabaseSchema } from './database';

export type SortDirection = 'ascending' | 'descending';

export type Sorts<S extends DatabaseSchema> = {
  [key in keyof NormalizeDatabaseSchema<S>]?: SortDirection;
};

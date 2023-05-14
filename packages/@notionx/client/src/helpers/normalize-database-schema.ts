import { mapValues } from 'lodash';

import { DatabaseSchema, NormalizeDatabaseSchema } from '../types/database';

export function normalizeDatabaseSchema<S extends DatabaseSchema>(
  schema: S
): NormalizeDatabaseSchema<S> {
  return mapValues(schema, (v, key) =>
    typeof v === 'string' ? { name: key, type: v } : v
  ) as NormalizeDatabaseSchema<S>;
}

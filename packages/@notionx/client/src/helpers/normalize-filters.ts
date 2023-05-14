import { instanceToPlain } from 'class-transformer';
import { entries } from 'lodash';

import { DatabaseSchema, NormalizeDatabaseSchema } from '../types/database';
import { Filter } from '../types/filters';

export function normalizeFilters<S extends DatabaseSchema>(
  schema: NormalizeDatabaseSchema<S>,
  filters: Filter<S>[] = [],
  root = true
): Record<string, any> {
  if (!filters) return [];

  const output: any[] = [];

  for (const f of filters) {
    for (const [key, filter] of entries(f)) {
      if (!filter) continue; // TODO: Check why type says it can be undefined

      if (['or', 'and'].includes(key)) {
        output.push({
          [key]: normalizeFilters(
            schema,
            filter as unknown as Filter<S>[],
            false
          ), // TODO: Check why typing is wrong
        });
      } else {
        const property = schema[key];
        output.push({
          property: 'name' in property ? property.name : property.id,
          [property.type]: instanceToPlain(filter),
        });
      }
    }
  }

  if (root) {
    return output.length > 1 ? { and: output } : output[0];
  }

  return output;
}

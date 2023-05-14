import { entries } from 'lodash';

import { DatabaseSchema, NormalizeDatabaseSchema } from '../types/database';
import { SortDirection, Sorts } from '../types/sort';

export function normalizeSorts<S extends DatabaseSchema>(
  schema: NormalizeDatabaseSchema<S>,
  sorts?: Sorts<S>
): { property: string; direction: SortDirection }[] {
  return sorts
    ? entries(sorts).map(([key, direction]) => {
        const property = schema[key];
        return {
          property: 'id' in property ? property.id : property.name,
          direction: direction!,
        };
      })
    : [];
}

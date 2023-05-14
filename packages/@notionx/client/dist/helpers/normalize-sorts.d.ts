import { DatabaseSchema, NormalizeDatabaseSchema } from '../types/database';
import { SortDirection, Sorts } from '../types/sort';
export declare function normalizeSorts<S extends DatabaseSchema>(schema: NormalizeDatabaseSchema<S>, sorts?: Sorts<S>): {
    property: string;
    direction: SortDirection;
}[];
//# sourceMappingURL=normalize-sorts.d.ts.map
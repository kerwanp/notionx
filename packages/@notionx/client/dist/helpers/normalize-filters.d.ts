import { DatabaseSchema, NormalizeDatabaseSchema } from '../types/database';
import { Filter } from '../types/filters';
export declare function normalizeFilters<S extends DatabaseSchema>(schema: NormalizeDatabaseSchema<S>, filters?: Filter<S>[], root?: boolean): Record<string, any>;
//# sourceMappingURL=normalize-filters.d.ts.map
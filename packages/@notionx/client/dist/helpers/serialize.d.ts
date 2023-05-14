import { ClassConstructor } from 'class-transformer';
import { Client } from '../client';
import { DatabaseSchema, NormalizeDatabaseSchema } from '../types/database';
import { PageWithProperties } from '../types/page';
export declare function deserialize<T extends {
    client: Client;
}, V>(client: Client, cls: ClassConstructor<T>, plain: V[]): T[];
export declare function deserializePage<S extends DatabaseSchema>(client: Client, schema: NormalizeDatabaseSchema<S>, data: any): PageWithProperties<S>;
//# sourceMappingURL=serialize.d.ts.map
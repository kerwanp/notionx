import { Filter } from './filters';
import { PropertyType } from './properties';
import { Sorts } from './sort';
export type DatabasePropertiesSchema = {
    [name: string]: PropertyType;
};
export type PropertyConfig = ({
    name: string;
} | {
    id: string;
}) & {
    type: PropertyType;
};
export type DatabaseSchema = {
    [name: string]: PropertyType | PropertyConfig;
};
export type NormalizeDatabaseSchema<S extends DatabaseSchema> = {
    [key in keyof S]: S[key] extends PropertyConfig ? S[key] : S[key] extends PropertyType ? {
        name: key;
        type: S[key];
    } : never;
};
export type ExtractPropertyConfigType<T extends PropertyType | PropertyConfig> = T extends PropertyType ? T : T extends PropertyConfig ? T['type'] : never;
export type QueryOptions<S extends DatabaseSchema> = {
    filter?: Filter<S>[];
    sorts?: Sorts<S>;
};
//# sourceMappingURL=database.d.ts.map
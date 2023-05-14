import { Page } from '../classes/page';
import { DatabaseSchema, ExtractPropertyConfigType } from './database';
import { PropertyValue } from './properties';
export type PageWithProperties<T extends DatabaseSchema> = Page & {
    [key in keyof T]: PropertyValue<ExtractPropertyConfigType<T[key]>>;
};
//# sourceMappingURL=page.d.ts.map
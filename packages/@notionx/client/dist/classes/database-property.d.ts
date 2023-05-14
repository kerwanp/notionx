import { PropertyType } from '../types/properties';
export declare class DatabaseProperty {
    /**
     * An identifier for the property, usually a short string of random letters and symbols.
     *
     * @example "fy:{"
     */
    id: string;
    /**
     * The name of the property as it appears in Notion.
     *
     * @example "Status"
     */
    name: string;
    /**
     * The type that controls the behavior of the property.
     *
     * @example "rich_text"
     */
    type: PropertyType;
}
//# sourceMappingURL=database-property.d.ts.map
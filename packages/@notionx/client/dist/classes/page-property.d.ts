import { PropertyType } from '../types/properties';
export declare class PageProperty<T> {
    /**
     * An underlying identifier for the property. id may be a UUID, but it’s often a short random string.
     *
     * @example "f%5C%5C%3Ap"
     */
    id: string;
    /**
     * The type of the property in the page object.
     *
     * @example "rich_text"
     */
    type: PropertyType;
    /**
     * The property value.
     */
    get value(): any;
}
//# sourceMappingURL=page-property.d.ts.map
export declare class RelationFilter {
    /**
     * Returns database entries where the relation property value contains the provided string.
     *
     * @example "6c574cee-ca68-41c8-86e0-1b9e992689fb"
     */
    contains: string;
    /**
     * Returns entries where the relation property value does not contain the provided string.
     *
     * @example "6c574cee-ca68-41c8-86e0-1b9e992689fb"
     */
    doesNotContain: string;
    /**
     * Returns database entries where the relation property value does not contain any data.
     */
    isEmpty: true;
    /**
     * Returns database entries where the property value is not empty.
     */
    isNotEmpty: true;
}
//# sourceMappingURL=relation.d.ts.map
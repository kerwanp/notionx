export declare class PeopleFilter {
    /**
     * Returns database entries where the people property value contains the provided string.
     *
     * @example "6c574cee-ca68-41c8-86e0-1b9e992689fb"
     */
    contains: string;
    /**
     * Returns database entries where the people property value does not contain the provided string.
     *
     * @example "6c574cee-ca68-41c8-86e0-1b9e992689fb"
     */
    doesNotContain: string;
    /**
     * Returns database entries where the people property value does not contain any data.
     */
    isEmpty: true;
    /**
     * Returns database entries where the people property value is not empty.
     */
    isNotEmpty: true;
}
//# sourceMappingURL=people.d.ts.map
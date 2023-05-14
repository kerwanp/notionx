export declare class SelectFilter {
    /**
     * Returns database entries where the select property value matches the provided string.
     *
     * @examplee "This week"
     */
    equals: string;
    /**
     * Returns database entries where the select property value does not match the provided string.
     *
     * @example "Backlog"
     */
    doesNotEqual: string;
    /**
     * Returns database entries where the select property value is empty.
     */
    isEmpty: true;
    /**
     * Returns database entries where the select property value is not empty.
     */
    isNotEmpty: true;
}
//# sourceMappingURL=select.d.ts.map
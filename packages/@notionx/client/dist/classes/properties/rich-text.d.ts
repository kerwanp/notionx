export declare class RichTextFilter {
    /**
     * Returns database entries with a text property value that includes the provided string.
     *
     * @example "Move to Q2"
     */
    contains: string;
    /**
     * Returns database entries with a text property value that does not include the provided string.
     *
     * @example "Move to Q2"
     */
    doesNotContain: string;
    /**
     * Returns database entries with a text property value that does not match the provided string.
     *
     * @example "Move to Q2"
     */
    doesNotEqual: string;
    /**
     * Returns database entries with a text property value that ends with the provided string.
     *
     * @example "Move to Q2"
     */
    endsWith: string;
    /**
     * Returns database entries with a text property value that matches the provided string.
     *
     * @example "Move to Q2"
     */
    equals: string;
    /**
     * Returns database entries with a text property value that is empty.
     */
    isEmpty: true;
    /**
     * Returns database entries with a text property value that contains data.
     */
    isNotEmpty: true;
    /**
     * Returns database entries with a text property value that starts with the provided string.
     *
     * @example "Move to Q2"
     */
    startsWith: string;
}
//# sourceMappingURL=rich-text.d.ts.map
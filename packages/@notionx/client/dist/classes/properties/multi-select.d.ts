export declare class MultiSelectFilter {
    /**
     * Returns database entries where the multi-select value contains the provided string.
     *
     * @example "Marketing"
     */
    contains: string;
    /**
     * Returns database entries where the multi-select value does not contain the provided string.
     *
     * @example "Engineering"
     */
    doesNotContain: string;
    /**
     * Returns database entries where the multi-select value does not contain any data.
     */
    isEmpty: true;
    /**
     * Returns database entries where the multi-select value does contains data.
     */
    isNotEmpty: true;
}
//# sourceMappingURL=multi-select.d.ts.map
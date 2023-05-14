export declare class DateFilter {
    /**
     * Returns database entries where the date property value is after the provided date.
     *
     * @example "2021-05-10" "2021-05-10T12:00:00" "2021-10-15T12:00:00-07:00"
     */
    after: string;
    /**
     * Returns database entries where the date property value is before the provided date.
     *
     * @example "2021-05-10" "2021-05-10T12:00:00" "2021-10-15T12:00:00-07:00"
     */
    before: string;
    /**
     * Returns database entries where the date property value is the provided date.
     *
     * @example "2021-05-10" "2021-05-10T12:00:00" "2021-10-15T12:00:00-07:00"
     */
    equals: string;
    /**
     * Returns database entries where the date property value contains no data.
     */
    isEmpty: true;
    /**
     * Returns database entries where the date property value is not empty.
     */
    isNotEmpty: true;
    /**
     * A filter that limits the results to database entries where the date property value is within the next month.
     */
    nextMonth: true;
    /**
     * A filter that limits the results to database entries where the date property value is within the next week.
     */
    nextWeek: true;
    /**
     * A filter that limits the results to database entries where the date property value is within the next year.
     */
    nextYear: true;
    /**
     * A filter that limits the results to database entries where the date property value is within the next week.
     *
     * @example "2021-05-10" "2021-05-10T12:00:00" "2021-10-15T12:00:00-07:00"
     */
    onOrAfter: string;
    /**
     * A filter that limits the results to database entries where the date property value is within the past month.
     */
    pastMonth: true;
    /**
     * A filter that limits the results to database entries where the date property value is within the past week.
     */
    pastWeek: true;
    /**
     * A filter that limits the results to database entries where the date property value is within the past year.
     */
    pastYear: true;
    /**
     * A filter that limits the results to database entries where the date property value is this week.
     */
    thisWeek: true;
}
//# sourceMappingURL=date.d.ts.map
import { Expose, Transform, Type } from 'class-transformer';

export class DateFilter {
  /**
   * Returns database entries where the date property value is after the provided date.
   *
   * @example "2021-05-10" "2021-05-10T12:00:00" "2021-10-15T12:00:00-07:00"
   */
  @Expose()
  @Type(() => Date)
  after: string;

  /**
   * Returns database entries where the date property value is before the provided date.
   *
   * @example "2021-05-10" "2021-05-10T12:00:00" "2021-10-15T12:00:00-07:00"
   */
  @Expose()
  @Type(() => Date)
  before: string;

  /**
   * Returns database entries where the date property value is the provided date.
   *
   * @example "2021-05-10" "2021-05-10T12:00:00" "2021-10-15T12:00:00-07:00"
   */
  @Expose()
  equals: string;

  /**
   * Returns database entries where the date property value contains no data.
   */
  @Expose({ name: 'is_empty' })
  isEmpty: true;

  /**
   * Returns database entries where the date property value is not empty.
   */
  @Expose({ name: 'is_not_empty' })
  isNotEmpty: true;

  /**
   * A filter that limits the results to database entries where the date property value is within the next month.
   */
  @Expose({ name: 'next_month' })
  @Transform(() => ({}), { toPlainOnly: true })
  nextMonth: true;

  /**
   * A filter that limits the results to database entries where the date property value is within the next week.
   */
  @Expose({ name: 'next_week' })
  @Transform(() => ({}), { toPlainOnly: true })
  nextWeek: true;

  /**
   * A filter that limits the results to database entries where the date property value is within the next year.
   */
  @Expose({ name: 'next_year' })
  @Transform(() => ({}), { toPlainOnly: true })
  nextYear: true;

  /**
   * A filter that limits the results to database entries where the date property value is within the next week.
   *
   * @example "2021-05-10" "2021-05-10T12:00:00" "2021-10-15T12:00:00-07:00"
   */
  @Expose({ name: 'on_or_after' })
  onOrAfter: string;

  /**
   * A filter that limits the results to database entries where the date property value is within the past month.
   */
  @Expose({ name: 'past_month' })
  @Transform(() => ({}), { toPlainOnly: true })
  pastMonth: true;

  /**
   * A filter that limits the results to database entries where the date property value is within the past week.
   */
  @Expose({ name: 'past_week' })
  @Transform(() => ({}), { toPlainOnly: true })
  pastWeek: true;

  /**
   * A filter that limits the results to database entries where the date property value is within the past year.
   */
  @Expose({ name: 'past_year' })
  @Transform(() => ({}), { toPlainOnly: true })
  pastYear: true;

  /**
   * A filter that limits the results to database entries where the date property value is this week.
   */
  @Expose({ name: 'this_week' })
  @Transform(() => ({}), { toPlainOnly: true })
  thisWeek: true;
}

import { Expose } from 'class-transformer';

export class BooleanFilter {
  /**
   * Returns or excludes all database entries with an exact value match.
   *
   * @example false
   */
  @Expose()
  equals: boolean;

  /**
   * Returns or excludes all database entries with a difference in values.
   *
   * @example true
   */
  @Expose({ name: 'does_not_equal' })
  doesNotEqual: boolean;
}

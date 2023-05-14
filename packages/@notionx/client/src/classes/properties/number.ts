import { Expose } from 'class-transformer';

export class NumberFilter {
  /**
   * Returns database entries where the number property value differs from the provided number.
   */
  @Expose({ name: 'does_not_equal' })
  doesNotEqual: number;

  /**
   * Returns database entries where the number property value is the same as the provided number.
   */
  @Expose()
  equals: number;

  /**
   * Returns database entries where the number property value exceeds the provided number.
   */
  @Expose({ name: 'greater_than' })
  greaterThan: number;

  /**
   * Returns database entries where the number property value is equal to or exceeds the provided number.
   */
  @Expose({ name: 'greater_than_or_equal_to' })
  greaterThanOrEqualTo: number;

  /**
   * Returns database entries where the number property value does not contain any data.
   */
  @Expose({ name: 'is_empty' })
  isEmpty: true;

  /**
   * Returns database entries where the number property value contains data.
   */
  @Expose({ name: 'is_not_empty' })
  isNotEmpty: true;

  /**
   * Returns database entries where the page property value is less than the provided number.
   */
  @Expose({ name: 'less_than' })
  lessThan: number;

  /**
   * Returns database entries where the page property value is equal to or is less than the provided number.
   */
  @Expose({ name: 'less_than_or_equal_to' })
  lessThanOrEqualTo: number;
}

import { Expose } from 'class-transformer';

export class RichTextFilter {
  /**
   * Returns database entries with a text property value that includes the provided string.
   *
   * @example "Move to Q2"
   */
  @Expose()
  contains: string;

  /**
   * Returns database entries with a text property value that does not include the provided string.
   *
   * @example "Move to Q2"
   */
  @Expose({ name: 'does_not_contain ' })
  doesNotContain: string;

  /**
   * Returns database entries with a text property value that does not match the provided string.
   *
   * @example "Move to Q2"
   */
  @Expose({ name: 'does_not_equal' })
  doesNotEqual: string;

  /**
   * Returns database entries with a text property value that ends with the provided string.
   *
   * @example "Move to Q2"
   */
  @Expose({ name: 'ends_with' })
  endsWith: string;

  /**
   * Returns database entries with a text property value that matches the provided string.
   *
   * @example "Move to Q2"
   */
  @Expose()
  equals: string;

  /**
   * Returns database entries with a text property value that is empty.
   */
  @Expose({ name: 'is_empty' })
  isEmpty: true;

  /**
   * Returns database entries with a text property value that contains data.
   */
  @Expose({ name: 'is_not_empty' })
  isNotEmpty: true;

  /**
   * Returns database entries with a text property value that starts with the provided string.
   *
   * @example "Move to Q2"
   */
  @Expose({ name: 'starts_with' })
  startsWith: string;
}

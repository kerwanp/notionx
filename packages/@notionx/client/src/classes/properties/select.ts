import { Expose } from 'class-transformer';

// TODO: Use unions
export class SelectFilter {
  /**
   * Returns database entries where the select property value matches the provided string.
   *
   * @examplee "This week"
   */
  @Expose()
  equals: string;

  /**
   * Returns database entries where the select property value does not match the provided string.
   *
   * @example "Backlog"
   */
  @Expose({ name: 'does_not_equal' })
  doesNotEqual: string;

  /**
   * Returns database entries where the select property value is empty.
   */
  @Expose({ name: 'is_empty' })
  isEmpty: true;

  /**
   * Returns database entries where the select property value is not empty.
   */
  @Expose({ name: 'is_not_empty' })
  isNotEmpty: true;
}

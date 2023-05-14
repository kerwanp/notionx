import { Expose } from 'class-transformer';

// TODO: Use unions
export class MultiSelectFilter {
  /**
   * Returns database entries where the multi-select value contains the provided string.
   *
   * @example "Marketing"
   */
  @Expose()
  contains: string;

  /**
   * Returns database entries where the multi-select value does not contain the provided string.
   *
   * @example "Engineering"
   */
  @Expose({ name: 'does_not_contain' })
  doesNotContain: string;

  /**
   * Returns database entries where the multi-select value does not contain any data.
   */
  @Expose({ name: 'is_empty' })
  isEmpty: true;

  /**
   * Returns database entries where the multi-select value does contains data.
   */
  @Expose({ name: 'is_not_empty' })
  isNotEmpty: true;
}

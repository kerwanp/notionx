import { Expose } from 'class-transformer';

export class PeopleFilter {
  /**
   * Returns database entries where the people property value contains the provided string.
   *
   * @example "6c574cee-ca68-41c8-86e0-1b9e992689fb"
   */
  @Expose()
  contains: string;

  /**
   * Returns database entries where the people property value does not contain the provided string.
   *
   * @example "6c574cee-ca68-41c8-86e0-1b9e992689fb"
   */
  @Expose()
  doesNotContain: string;

  /**
   * Returns database entries where the people property value does not contain any data.
   */
  @Expose({ name: 'is_empty' })
  isEmpty: true;

  /**
   * Returns database entries where the people property value is not empty.
   */
  @Expose({ name: 'is_not_empty' })
  isNotEmpty: true;
}

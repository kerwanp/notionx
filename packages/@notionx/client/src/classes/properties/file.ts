import { Expose } from 'class-transformer';

export class FileFilter {
  /**
   * Returns all database entries with an empty files property value.
   */
  @Expose({ name: 'is_empty' })
  isEmpty: true;

  /**
   * Returns all entries with a populated files property value.
   */
  @Expose({ name: 'is_not_empty' })
  isNotEmpty: true;
}

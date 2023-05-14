import { Expose, Type } from 'class-transformer';

export class Database {
  /**
   * Unique identifier for the database.
   *
   * @example "2f26ee68-df30-4251-aad4-8ddc420cba3d"
   */
  @Expose()
  id: string;

  /**
   * The URL of the Notion database.
   */
  @Expose()
  url: string;

  /**
   * Information about the database's parent
   */
  @Expose()
  parent: any; // TODO

  /**
   * Name of the database as it appears in Notion.
   */
  @Expose()
  title: any; // TODO

  /**
   * Description of the database as it appears in Notion.
   */
  @Expose()
  description: any; // TODO

  /**
   * Page icon.
   */
  @Expose()
  icon: any; // TODO

  /**
   * Page cover image.
   */
  @Expose()
  cover: any; // TODO

  /**
   * The archived status of the database.
   *
   * @example false
   */
  @Expose()
  archived: boolean;

  /**
   * Has the value `true` if the database appears in the page as an inline block.
   * Otherwise has the value `false` if the database appears as a child page.
   *
   * @example false
   */
  @Expose({ name: 'is_inline' })
  isInline: boolean;

  /**
   * User who last edited the database.
   */
  @Expose({ name: 'last_edited_by' })
  lastEditedBy: any;

  /**
   * Date and time when this database was updated.
   *
   * @example "2020-03-17T21:49:37.913Z"
   */
  @Type(() => Date)
  @Expose({ name: 'last_edited_time' })
  lastEditedTime: Date;

  /**
   * User who created the database.
   */
  @Expose({ name: 'created_by' })
  createdBy: any;

  /**
   * Date and time when this database was created.
   *
   * @example "2020-03-17T19:10:04.968Z"
   */
  @Type(() => Date)
  @Expose({ name: 'created_time' })
  createdTime: Date;
}

import { Expose, Type } from 'class-transformer';

import { Client } from '../client';

export class Page {
  client: Client;

  /**
   * Unique identifier of the page.
   * @example "45ee8d13-687b-47ce-a5ca-6e2e45548c4b"
   */
  @Expose()
  id: string;

  /**
   * The URL of the Notion page.
   *
   * @example "https://www.notion.so/Avocado-d093f1d200464ce78b36e58a3f0d8043"
   */
  @Expose()
  url: string;

  /**
   * Information about the page's parent.
   *
   * @example TODO
   */
  @Expose()
  parent: any; // TODO

  /**
   * Page icon.
   *
   * @example TODO
   */
  @Expose()
  icon: any; // TODO

  /**
   * Page cover image.
   *
   * @example TODO
   */
  @Expose()
  cover: any; // TODO

  /**
   * The archived status of the page.
   *
   * @example false
   */
  @Expose()
  archived: boolean;

  /**
   * User who last edited the page.
   */
  @Expose({ name: 'last_edited_by' })
  lastEditedBy: any; // TODO

  /**
   * Date and time when this page was updated.
   *
   * @example 2023-03-08T18:25:00.000Z
   */
  @Type(() => Date)
  @Expose({ name: 'last_edited_time' })
  lastEditedTime: Date;

  /**
   * User who created the page.
   */
  @Expose({ name: 'created_by' })
  createdBy: any; // TODO

  /**
   * Date and time when this page was created.
   *
   * @example 2023-03-08T18:25:00.000Z
   */
  @Type(() => Date)
  @Expose({ name: 'created_time' })
  createdTime: Date;

  content() {
    return this.client.request(`/blocks/${this.id}/children`);
  }
}

import { Expose } from 'class-transformer';

import { PropertyType } from '../types/properties';

export class DatabaseProperty {
  /**
   * An identifier for the property, usually a short string of random letters and symbols.
   *
   * @example "fy:{"
   */
  @Expose()
  id: string;

  /**
   * The name of the property as it appears in Notion.
   *
   * @example "Status"
   */
  @Expose()
  name: string;

  /**
   * The type that controls the behavior of the property.
   *
   * @example "rich_text"
   */
  @Expose()
  type: PropertyType;
}

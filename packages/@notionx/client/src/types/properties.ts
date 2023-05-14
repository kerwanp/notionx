export type PropertyType =
  | 'checkbox'
  | 'created_by'
  | 'created_time'
  | 'date'
  | 'email'
  | 'files'
  | 'formula'
  | 'last_edited_by'
  | 'last_edited_time'
  | 'multi_select'
  | 'number'
  | 'people'
  | 'phone_number'
  | 'relation'
  | 'rollup'
  | 'rich_text'
  | 'select'
  | 'status'
  | 'title';

export type PropertyValueMapping = {
  checkbox: boolean;
};

export type PropertyValue<T extends PropertyType> =
  T extends keyof PropertyValueMapping ? PropertyValueMapping[T] : never;

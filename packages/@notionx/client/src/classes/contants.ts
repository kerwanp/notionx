import { BooleanFilter } from './properties/boolean';
import { DateFilter } from './properties/date';
import { FileFilter } from './properties/file';
import { MultiSelectFilter } from './properties/multi-select';
import { NumberFilter } from './properties/number';
import { PeopleFilter } from './properties/people';
import { RichTextFilter } from './properties/rich-text';
import { SelectFilter } from './properties/select';
export const FILTER_CLASSES_MAPPING = {
  checkbox: BooleanFilter,
  rich_text: RichTextFilter,
  email: RichTextFilter,
  number: NumberFilter,
  created_by: PeopleFilter,
  created_time: DateFilter,
  date: DateFilter,
  files: FileFilter,
  formula: RichTextFilter, // TODO
  last_edited_by: PeopleFilter,
  last_edited_time: DateFilter,
  multi_select: MultiSelectFilter,
  people: PeopleFilter,
  phone_number: RichTextFilter,
  relation: RichTextFilter,
  rollup: RichTextFilter, // TODO
  select: SelectFilter,
  status: SelectFilter,
  title: RichTextFilter,
};

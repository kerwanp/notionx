import { BooleanFilter } from './properties/boolean';
import { DateFilter } from './properties/date';
import { FileFilter } from './properties/file';
import { MultiSelectFilter } from './properties/multi-select';
import { NumberFilter } from './properties/number';
import { PeopleFilter } from './properties/people';
import { RichTextFilter } from './properties/rich-text';
import { SelectFilter } from './properties/select';
export declare const FILTER_CLASSES_MAPPING: {
    checkbox: typeof BooleanFilter;
    rich_text: typeof RichTextFilter;
    email: typeof RichTextFilter;
    number: typeof NumberFilter;
    created_by: typeof PeopleFilter;
    created_time: typeof DateFilter;
    date: typeof DateFilter;
    files: typeof FileFilter;
    formula: typeof RichTextFilter;
    last_edited_by: typeof PeopleFilter;
    last_edited_time: typeof DateFilter;
    multi_select: typeof MultiSelectFilter;
    people: typeof PeopleFilter;
    phone_number: typeof RichTextFilter;
    relation: typeof RichTextFilter;
    rollup: typeof RichTextFilter;
    select: typeof SelectFilter;
    status: typeof SelectFilter;
    title: typeof RichTextFilter;
};
//# sourceMappingURL=contants.d.ts.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILTER_CLASSES_MAPPING = void 0;
var boolean_1 = require("./properties/boolean");
var date_1 = require("./properties/date");
var file_1 = require("./properties/file");
var multi_select_1 = require("./properties/multi-select");
var number_1 = require("./properties/number");
var people_1 = require("./properties/people");
var rich_text_1 = require("./properties/rich-text");
var select_1 = require("./properties/select");
exports.FILTER_CLASSES_MAPPING = {
    checkbox: boolean_1.BooleanFilter,
    rich_text: rich_text_1.RichTextFilter,
    email: rich_text_1.RichTextFilter,
    number: number_1.NumberFilter,
    created_by: people_1.PeopleFilter,
    created_time: date_1.DateFilter,
    date: date_1.DateFilter,
    files: file_1.FileFilter,
    formula: rich_text_1.RichTextFilter,
    last_edited_by: people_1.PeopleFilter,
    last_edited_time: date_1.DateFilter,
    multi_select: multi_select_1.MultiSelectFilter,
    people: people_1.PeopleFilter,
    phone_number: rich_text_1.RichTextFilter,
    relation: rich_text_1.RichTextFilter,
    rollup: rich_text_1.RichTextFilter,
    select: select_1.SelectFilter,
    status: select_1.SelectFilter,
    title: rich_text_1.RichTextFilter,
};
//# sourceMappingURL=contants.js.map
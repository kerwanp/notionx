export declare class Database {
    /**
     * Unique identifier for the database.
     *
     * @example "2f26ee68-df30-4251-aad4-8ddc420cba3d"
     */
    id: string;
    /**
     * The URL of the Notion database.
     */
    url: string;
    /**
     * Information about the database's parent
     */
    parent: any;
    /**
     * Name of the database as it appears in Notion.
     */
    title: any;
    /**
     * Description of the database as it appears in Notion.
     */
    description: any;
    /**
     * Page icon.
     */
    icon: any;
    /**
     * Page cover image.
     */
    cover: any;
    /**
     * The archived status of the database.
     *
     * @example false
     */
    archived: boolean;
    /**
     * Has the value `true` if the database appears in the page as an inline block.
     * Otherwise has the value `false` if the database appears as a child page.
     *
     * @example false
     */
    isInline: boolean;
    /**
     * User who last edited the database.
     */
    lastEditedBy: any;
    /**
     * Date and time when this database was updated.
     *
     * @example "2020-03-17T21:49:37.913Z"
     */
    lastEditedTime: Date;
    /**
     * User who created the database.
     */
    createdBy: any;
    /**
     * Date and time when this database was created.
     *
     * @example "2020-03-17T19:10:04.968Z"
     */
    createdTime: Date;
}
//# sourceMappingURL=database.d.ts.map
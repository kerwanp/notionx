import { Client } from '../client';
export declare class Page {
    client: Client;
    /**
     * Unique identifier of the page.
     * @example "45ee8d13-687b-47ce-a5ca-6e2e45548c4b"
     */
    id: string;
    /**
     * The URL of the Notion page.
     *
     * @example "https://www.notion.so/Avocado-d093f1d200464ce78b36e58a3f0d8043"
     */
    url: string;
    /**
     * Information about the page's parent.
     *
     * @example TODO
     */
    parent: any;
    /**
     * Page icon.
     *
     * @example TODO
     */
    icon: any;
    /**
     * Page cover image.
     *
     * @example TODO
     */
    cover: any;
    /**
     * The archived status of the page.
     *
     * @example false
     */
    archived: boolean;
    /**
     * User who last edited the page.
     */
    lastEditedBy: any;
    /**
     * Date and time when this page was updated.
     *
     * @example 2023-03-08T18:25:00.000Z
     */
    lastEditedTime: Date;
    /**
     * User who created the page.
     */
    createdBy: any;
    /**
     * Date and time when this page was created.
     *
     * @example 2023-03-08T18:25:00.000Z
     */
    createdTime: Date;
    content(): Promise<any>;
}
//# sourceMappingURL=page.d.ts.map
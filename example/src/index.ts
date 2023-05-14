import { Client } from '@notionx/client';

const client = new Client({
  auth: process.env.NOTION_TOKEN!,
});

async function main() {
  const pages = await client.queryDatabase(
    '25bc244c88b3467ba01a35b4b18b4426',
    {
      Description: 'rich_text',
      blockType: {
        name: 'Block type',
        type: 'rich_text',
      },
      requireClient: {
        name: 'Require client',
        type: 'checkbox',
      },
      name: {
        name: 'Name',
        type: 'title',
      },
    },
    {
      sorts: {
        name: 'descending',
      },
    }
  );

  for (const page of pages) {
    console.log(page.name);
  }
}

main();

import { Client } from '@notionhq/client'
import 'dotenv/config'

const notion = new Client({ auth: process.env.API_KEY })

export const queryDatabase = (databaseId: string) => {
  return notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'Name',
        direction: 'ascending'
      }
    ]
  })
}

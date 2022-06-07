import { Client } from '@notionhq/client'
import 'dotenv/config'

const notion = new Client({ auth: process.env.API_KEY })

export const queryDatabase = (databaseId: string) => {
  return notion.databases.query({
    database_id: databaseId
  })
}

type FilterObject = { property: string } & ({ rich_text: { contains: string } } | { title: { contains: string } })

export const queryDatabaseFilter = (databaseId: string, filter: FilterObject) => {
  return notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'Name',
        direction: 'ascending'
      }
    ],
    filter: { ...filter }
  })
}

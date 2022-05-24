import { Client } from '@notionhq/client'
require('dotenv').config()

const notion = new Client({ auth: process.env.API_KEY })

export type TalksType = { text: string; value: string }[]

export async function loadTalks(): Promise<TalksType> {
  const databaseId = process.env.TALKS_DATABASE_ID as string
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'Name',
        direction: 'ascending'
      }
    ]
  })
  return response.results.map(result => {
    return {
      // @ts-ignore: Unreachable code error
      text: result.properties.Name.title[0].plain_text,
      // @ts-ignore: Unreachable code error
      value: result.properties.Tag.rich_text[0].plain_text
    }
  })
}

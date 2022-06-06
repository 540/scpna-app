import { queryDatabase } from './QueryDatabase'
import { TalksType } from './types'
import 'dotenv/config'

export async function getTalks(): Promise<TalksType> {
  const databaseId = process.env.TALKS_DATABASE_ID as string
  const response = await queryDatabase(databaseId)
  return response.results.map(result => {
    if ('properties' in result && 'title' in result.properties.Name && 'rich_text' in result.properties.Id) {
      return {
        text: result.properties.Name.title[0].plain_text,
        value: result.properties.Id.rich_text[0].plain_text
      }
    }
    return { text: 'Empty row', value: 'Empty row' }
  })
}

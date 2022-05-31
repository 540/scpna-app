import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { queryDatabase } from './QueryDatabase'
import { AgendaArrType } from './types'

type AgendaParseType = {
  id: string
  properties: {
    Name: { title: { plain_text: string }[] }
    Description: { rich_text: { plain_text: string }[] }
    Title: { rich_text: { plain_text: string }[] }
    Time: { rich_text: { plain_text: string }[] }
    Image: { rich_text: { plain_text: string }[] }
    TalkId: { rich_text: { plain_text: string }[] }
    LinkedIn: { url: string }
    Twitter: { url: string }
  }
}

const parseAgendaProps = (result: AgendaParseType) => {
  return {
    id: result.id,
    description: result.properties.Description.rich_text[0].plain_text,
    title: result.properties.Title.rich_text[0].plain_text,
    time: result.properties.Time.rich_text[0].plain_text,
    image: result.properties.Image.rich_text[0].plain_text,
    talkId: result.properties.TalkId.rich_text[0].plain_text,
    name: result.properties.Name.title[0].plain_text,
    linkedIn: result.properties.LinkedIn.url,
    twitter: result.properties.Twitter.url
  }
}

const defaultAgendaValues = () => {
  return {
    id: 'Empty row',
    description: 'Empty row',
    title: 'Empty row',
    time: 'Empty row',
    linkedIn: 'Empty row',
    twitter: 'Empty row',
    name: 'Empty row',
    image: 'Empty row',
    talkId: 'Empty row'
  }
}

const verifyAgendaValues = (result: any) => {
  return (
    'properties' in result &&
    result.properties &&
    'title' in result.properties.Name &&
    'rich_text' in result.properties.Description &&
    'rich_text' in result.properties.Title &&
    'rich_text' in result.properties.Time &&
    'rich_text' in result.properties.Image &&
    'rich_text' in result.properties.TalkId &&
    'url' in result.properties.LinkedIn &&
    'url' in result.properties.Twitter
  )
}

const getAgendaValues = ({ results }: QueryDatabaseResponse) => {
  return results.map(result => {
    if (verifyAgendaValues(result)) {
      return parseAgendaProps(result as any)
    }
    return defaultAgendaValues()
  })
}

export async function getAgenda(): Promise<AgendaArrType> {
  const databaseId = process.env.AGENDA_DATABASE as string
  const response = await queryDatabase(databaseId)
  return getAgendaValues(response)
}

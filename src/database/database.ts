import { Client } from '@notionhq/client'
import 'dotenv/config'

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
    if ('properties' in result && 'title' in result.properties.Name && 'rich_text' in result.properties.Tag) {
      return {
        text: result.properties.Name.title[0].plain_text,
        value: result.properties.Tag.rich_text[0].plain_text
      }
    }
    return { text: 'Empty row', value: 'Empty row' }
  })
}

export type QuestionsArrType = {
  email: string
  speech: string
  name: string
  question: string
}[]

export async function getQuestions(): Promise<QuestionsArrType> {
  const databaseId = process.env.QUESTIONS_DATABASE as string
  const { results } = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'Name',
        direction: 'ascending'
      }
    ]
  })
  return results.map(result => {
    if (
      'properties' in result &&
      'title' in result.properties.Name &&
      'rich_text' in result.properties.Speech &&
      'email' in result.properties.Email &&
      'rich_text' in result.properties.Question
    ) {
      return {
        email: result.properties.Email.email as string,
        speech: result.properties.Speech.rich_text[0].plain_text,
        name: result.properties.Name.title[0].plain_text,
        question: result.properties.Question.rich_text[0].plain_text
      }
    }
    return { email: 'Empty row', speech: 'Empty row', name: 'Empty row', question: 'Empty row' }
  })
}

export type QuestionsAndTalksType = {
  questions: QuestionsArrType
  talks: TalksType
}

export type AgendaArrType = {
  id: string
  image: string
  description: string
  title: string
  time: string
  linkedIn: string
  twitter: string
  name: string
}[]

export async function getAgenda(): Promise<AgendaArrType> {
  const databaseId = process.env.AGENDA_DATABASE as string
  const { results } = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'Name',
        direction: 'ascending'
      }
    ]
  })
  return results.map(result => {
    if (
      'properties' in result &&
      'title' in result.properties.Name &&
      'rich_text' in result.properties.Description &&
      'rich_text' in result.properties.Title &&
      'rich_text' in result.properties.Time &&
      'rich_text' in result.properties.Image &&
      'url' in result.properties.LinkedIn &&
      'url' in result.properties.Twitter
    ) {
      return {
        id: result.id,
        description: result.properties.Description.rich_text[0].plain_text,
        title: result.properties.Title.rich_text[0].plain_text,
        time: result.properties.Time.rich_text[0].plain_text,
        linkedIn: result.properties.LinkedIn.url as string,
        twitter: result.properties.Twitter.url as string,
        name: result.properties.Name.title[0].plain_text,
        image: result.properties.Image.rich_text[0].plain_text
      }
    }
    return {
      id: 'Empty row',
      description: 'Empty row',
      title: 'Empty row',
      time: 'Empty row',
      linkedIn: 'Empty row',
      twitter: 'Empty row',
      name: 'Empty row',
      image: 'Empty row'
    }
  })
}

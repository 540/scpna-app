/* eslint-disable @typescript-eslint/ban-ts-comment */
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
    return {
      // @ts-ignore: Unreachable code error
      text: result.properties.Name.title[0].plain_text,
      // @ts-ignore: Unreachable code error
      value: result.properties.Tag.rich_text[0].plain_text
    }
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
    return {
      // @ts-ignore: Unreachable code error
      email: result.properties.Email.email,
      // @ts-ignore: Unreachable code error
      speech: result.properties.Speech.rich_text[0].plain_text,
      // @ts-ignore: Unreachable code error
      name: result.properties.Name.title[0].plain_text,
      // @ts-ignore: Unreachable code error
      question: result.properties.Question.rich_text[0].plain_text
    }
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
    return {
      id: result.id,
      // @ts-ignore: Unreachable code error
      description: result.properties.Description.rich_text[0].plain_text,
      // @ts-ignore: Unreachable code error
      title: result.properties.Title.rich_text[0].plain_text,
      // @ts-ignore: Unreachable code error
      time: result.properties.Time.rich_text[0].plain_text,
      // @ts-ignore: Unreachable code error
      linkedIn: result.properties.LinkedIn.url,
      // @ts-ignore: Unreachable code error
      twitter: result.properties.Twitter.url,
      // @ts-ignore: Unreachable code error
      name: result.properties.Name.title[0].plain_text,
      // @ts-ignore: Unreachable code error
      image: result.properties.Image.rich_text[0].plain_text
    }
  })
}

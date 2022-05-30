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
  talk: string
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
      talk: result.properties.Talk.rich_text[0].plain_text,
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

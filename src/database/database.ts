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

export async function pushQuestion() {
  let response = 200
  try {
    await notion.pages.create({
      parent: { database_id: DATABASE_ID },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: 'Miguel Puerta'
              }
            }
          ]
        },
        Email: {
          email: 'test@migulpuerta.com'
        },
        Speech: {
          rich_text: [
            {
              text: {
                content: 'Desarrollo frontend moderno'
              }
            }
          ]
        },
        Question: {
          rich_text: [
            {
              text: {
                content: 'Pregunta'
              }
            }
          ]
        }
      }
    })
  } catch (error) {
    response = 400
  }
  return response
}

import { Client } from '@notionhq/client'
import 'dotenv/config'

const notion = new Client({
  auth: process.env.API_KEY,
  logLevel: undefined
})

const DATABASE_ID = process.env.QUESTIONS_DATABASE_ID

export default async function pushQuestion(req, res) {
  const body = JSON.parse(req.body)
  let response = 200
  try {
    await notion.pages.create({
      parent: { database_id: DATABASE_ID },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: body.name
              }
            }
          ]
        },
        Email: {
          email: body.email
        },
        Talk: {
          rich_text: [
            {
              text: {
                content: body.talk
              }
            }
          ]
        },
        Question: {
          rich_text: [
            {
              text: {
                content: body.question
              }
            }
          ]
        }
      }
    })
  } catch (error) {
    response = 400
  }
  res.send(response)
}

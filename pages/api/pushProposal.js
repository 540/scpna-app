import { Client } from '@notionhq/client'
import 'dotenv/config'

const notion = new Client({
  auth: process.env.API_KEY,
  logLevel: undefined
})

const DATABASE_ID = process.env.OPEN_SPACE_DATABASE_ID

export default async function pushQuestion(req, res) {
  const body = JSON.parse(req.body)
  let response = 200
  try {
    await notion.pages.create({
      parent: { database_id: DATABASE_ID },
      properties: {
        Title: {
          title: [
            {
              text: {
                content: body.title
              }
            }
          ]
        },
        Email: {
          email: body.email
        },
        Description: {
          rich_text: [
            {
              text: {
                content: body.description
              }
            }
          ]
        },
        Duration: {
          rich_text: [
            {
              text: {
                content: body.duration
              }
            }
          ]
        },
        Name: {
          rich_text: [
            {
              text: {
                content: body.personName
              }
            }
          ]
        },
        Surname: {
          rich_text: [
            {
              text: {
                content: body.personSurname
              }
            }
          ]
        },
        ProjectorNeeded: {
          checkbox: body.projector_needed
        }
      }
    })
  } catch (error) {
    response = 400
  }
  res.send(response)
}

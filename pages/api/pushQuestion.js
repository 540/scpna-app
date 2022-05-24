const { Client } = require('@notionhq/client')
require('dotenv').config()

const notion = new Client({
  auth: process.env.API_KEY,
  logLevel: undefined
})

const DATABASE_ID = process.env.QUESTIONS_DATABASE

export default async (req, res) => {
  console.log('TYPEOF:')
  console.log(typeof req.body)
  console.log(req.body)
  const { body } = req
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
        Speech: {
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

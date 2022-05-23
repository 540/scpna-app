const { Client } = require('@notionhq/client')
// require('dotenv').config()

const notion = new Client({
  auth: 'secret_IBQ23Csvzicc5sqGqwFPQiKd911X8SafoN6C8xQn3qr',
  logLevel: undefined
})

const DATABASE_ID = '7b490bc23d3746f6937091ea15f1f6bb'

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
// main().then(res => console.log(res))

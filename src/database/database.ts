const { Client } = require('@notionhq/client')
// require('dotenv').config()

const notion = new Client({
  auth: process.env.API_KEY,
  logLevel: undefined
})
const DATABASE_ID = '7b490bc23d3746f6937091ea15f1f6bb'

export default async (req, res) => {
  const response = await notion.databases.query({
    database_id: DATABASE_ID
  })

  res.status(200).json({ response })
}

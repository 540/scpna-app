import { Client } from '@notionhq/client'
import 'dotenv/config'

const notion = new Client({
  auth: process.env.API_KEY,
  logLevel: undefined
})

const DATABASE_ID = process.env.PROPOSAL_VOTES_DATABASE_ID
// result.properties.Tags.relation.map((elem: { id: string }) => elem.id)
export default async function updateProposalSelection(req, res) {
  let response = 200
  const body = JSON.parse(req.body)
  //    get pageId
  const { userId } = body
  const { results } = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: 'id',
      title: {
        contains: userId
      }
    }
  })

  console.log('ID: ', userId)

  const pageId = results[0].id

  const propertiesArray = body.selectedTalks.map(elem => ({ id: elem }))
  try {
    await notion.pages.update({
      pageId: pageId,

      properties: {
        Tags: {
          relation: propertiesArray
        }
      }
    })
  } catch (error) {
    response = 400
  }
  res.send(response)
}

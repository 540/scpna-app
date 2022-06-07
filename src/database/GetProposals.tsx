import { queryDatabase } from './QueryDatabase'
import 'dotenv/config'

type ResultsType = { properties: { Tags: { relation: { id: string }[] } } }[]
export type VotedProposalsType = { [s: string]: number }
export async function getVotedProposals(): Promise<VotedProposalsType> {
  const databaseId = process.env.PROPOSAL_VOTES_DATABASE_ID as string
  const allProposals = await getAllProposals()

  const { results } = (await queryDatabase(databaseId)) as unknown as { results: ResultsType }
  const proposalsNumber: VotedProposalsType = {}
  const allVotes: string[][] = results.map(result =>
    result.properties.Tags.relation.map((elem: { id: string }) => elem.id)
  )
  allProposals.forEach(({ key }) => (proposalsNumber[key] = 0))
  allVotes.forEach(result => result.forEach(elem => (proposalsNumber[elem] = proposalsNumber[elem] + 1)))
  return proposalsNumber
}

export type GetAllProposalsType = { key: string; description: string; fullName: string; title: string }[]
export async function getAllProposals(): Promise<GetAllProposalsType> {
  const databaseId = process.env.OPEN_SPACE_DATABASE_ID as string
  const { results } = await queryDatabase(databaseId)
  return results.map(result => {
    const {
      properties: { Description, FullName, Title },
      id
    } = result
    return {
      key: id,
      description: Description.rich_text[0].plain_text,
      fullName: FullName.rich_text[0].plain_text,
      title: Title.title[0].plain_text
    }
  })
}

export type AllAndVotedProposals = { allProposals: GetAllProposalsType; votedProposals: VotedProposalsType }

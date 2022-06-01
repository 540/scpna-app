import { queryDatabase } from './QueryDatabase'
import { QuestionsArrType } from './types'
import 'dotenv/config'

export async function getQuestions(): Promise<QuestionsArrType> {
  const databaseId = process.env.QUESTIONS_DATABASE_ID as string
  const { results } = await queryDatabase(databaseId)
  return results.map(result => {
    if (
      'properties' in result &&
      'title' in result.properties.Name &&
      'rich_text' in result.properties.TalkId &&
      'email' in result.properties.Email &&
      'rich_text' in result.properties.Question
    ) {
      return {
        email: result.properties.Email.email as string,
        talkId: result.properties.TalkId.rich_text[0].plain_text,
        name: result.properties.Name.title[0].plain_text,
        question: result.properties.Question.rich_text[0].plain_text
      }
    }
    return { email: 'Empty row', talkId: 'Empty row', name: 'Empty row', question: 'Empty row' }
  })
}

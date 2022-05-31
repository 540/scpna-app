import { queryDatabase } from './QueryDatabase'
import { QuestionsArrType } from './types'

export async function getQuestions(): Promise<QuestionsArrType> {
  const databaseId = process.env.QUESTIONS_DATABASE as string
  const { results } = await queryDatabase(databaseId)
  return results.map(result => {
    if (
      'properties' in result &&
      'title' in result.properties.Name &&
      'rich_text' in result.properties.Speech &&
      'email' in result.properties.Email &&
      'rich_text' in result.properties.Question
    ) {
      return {
        email: result.properties.Email.email as string,
        speech: result.properties.Speech.rich_text[0].plain_text,
        name: result.properties.Name.title[0].plain_text,
        question: result.properties.Question.rich_text[0].plain_text
      }
    }
    return { email: 'Empty row', speech: 'Empty row', name: 'Empty row', question: 'Empty row' }
  })
}

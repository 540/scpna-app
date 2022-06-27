import { QuestionType } from 'ui/Ask/types'

export const pushQuestion = (data: QuestionType): Promise<number> => {
  return new Promise((res, rej) => res(1))
}

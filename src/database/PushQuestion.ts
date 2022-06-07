import type { QuestionType } from 'ui/Ask/types'

export const pushQuestion = (data: QuestionType): Promise<number> => {
  return fetch('/api/pushQuestion', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/jso'
    }
  }).then(res => res.json())
}

import { OpenDataType } from 'ui/Open/types'

export const pushProposal = (data: OpenDataType): Promise<number> => {
  return fetch('/api/pushProposal', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/jso'
    }
  }).then(res => res.json())
}

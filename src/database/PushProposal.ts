import { OpenServerDataType } from 'ui/Open/types'

export const pushProposal = (data: OpenServerDataType): Promise<number> => {
  return fetch('/api/pushProposal', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/jso'
    }
  }).then(res => res.json())
}

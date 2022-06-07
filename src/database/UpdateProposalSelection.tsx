export const UpdateProposalSelection = (data: { userId: string; selectedTalks: string[] }): Promise<number> => {
  return fetch('/api/UpdateProposalSelection', {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/jso'
    }
  }).then(res => res.json())
}

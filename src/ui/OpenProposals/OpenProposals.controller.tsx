import { OpenProposals } from './OpenProposals'
import { useTrans } from 'ui/_hooks/useTrans'

export const OpenProposalsController = () => {
  const trans = useTrans('openProposals')

  return <OpenProposals />
}

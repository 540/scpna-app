import { OpenProposals } from './OpenProposals'
import { useTrans } from 'ui/_hooks/useTrans'
import { AllAndVotedProposals } from 'src/database/GetProposals'

export const OpenProposalsController = ({ votedProposals, allProposals }: AllAndVotedProposals) => {
  const trans = useTrans('openProposals')

  return <OpenProposals {...{ trans, votedProposals, allProposals }} />
}

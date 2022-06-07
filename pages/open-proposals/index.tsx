import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { OpenProposals } from 'ui/OpenProposals'
import { getVotedProposals, getAllProposals, AllAndVotedProposals } from 'src/database/GetProposals'

const OpenProposalsPage: NextPage<AllAndVotedProposals> = ({ votedProposals, allProposals }) => (
  <OpenProposals {...{ votedProposals, allProposals }} />
)

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common', 'openProposals'])),
    votedProposals: await getVotedProposals(),
    allProposals: await getAllProposals()
  }
})

export default OpenProposalsPage

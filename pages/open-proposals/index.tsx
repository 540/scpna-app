import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { OpenProposals } from 'ui/OpenProposals'

const OpenProposalsPage: NextPage = () => <OpenProposals />

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common', 'open']))
  }
})

export default OpenProposalsPage

import type { GetServerSideProps, NextPage } from 'next'
import { Ask } from 'ui/Ask'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { loadTalks, TalksType } from '../../src/database/database'

const AskPage: NextPage<{ talks: TalksType }> = ({ talks }: { talks: TalksType }) => <Ask talks={talks} />

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
    talks: await loadTalks()
  }
})

export default AskPage

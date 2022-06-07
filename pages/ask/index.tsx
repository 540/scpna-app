import type { GetServerSideProps, NextPage } from 'next'
import { Ask } from 'ui/Ask'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getTalks } from '../../src/database'
import { TalksType } from '../../src/database/types'

const AskPage: NextPage<{ talks: TalksType }> = ({ talks }: { talks: TalksType }) => <Ask talks={talks} />

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common', 'ask'])),
    talks: await getTalks()
  }
})

export default AskPage

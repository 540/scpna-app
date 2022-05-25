import type { GetStaticProps, NextPage } from 'next'
import { QuestionsPage } from 'ui/Questions'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getTalksQuestions, TalksType } from '../../src/database/database'

const TalksQuestionsPage: NextPage<{ talks: TalksType }> = ({ talks }: { talks: TalksType }) => (
  <QuestionsPage talks={talks} />
)

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
    talks: await getTalksQuestions()
  }
})

export default TalksQuestionsPage

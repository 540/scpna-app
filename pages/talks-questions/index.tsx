import type { GetStaticProps, NextPage } from 'next'
import { TalksQuestions } from 'ui/Talks-Questions'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getTalksQuestions, TalksType } from '../../src/database/database'

const TalksQuestionsPage: NextPage<{ talks: TalksType }> = ({ talks }: { talks: TalksType }) => (
  <TalksQuestions talks={talks} />
)

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
    talks: await getTalksQuestions()
  }
})

export default TalksQuestionsPage

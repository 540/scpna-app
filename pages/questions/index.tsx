import type { GetStaticProps, NextPage } from 'next'
import { QuestionsPage } from 'ui/Questions'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getQuestions, getTalks, QuestionsAndTalksType } from '../../src/database'

const TalksQuestionsPage: NextPage<QuestionsAndTalksType> = ({ talks, questions }) => (
  <QuestionsPage talks={talks} questions={questions} />
)

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common', 'questions'])),
    talks: await getTalks(),
    questions: await getQuestions()
  }
})

export default TalksQuestionsPage

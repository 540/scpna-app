import { QuestionsAndTalksType } from '../../database/types'
import { Header, ContentWrapper } from 'ui/_components'
import React from 'react'
import { QuestionSection } from './_components/QuestionsSection'

export const QuestionsPage = ({ talks, questions }: QuestionsAndTalksType) => {
  return (
    <ContentWrapper>
      <Header />
      <QuestionSection talks={talks} questions={questions} />
    </ContentWrapper>
  )
}

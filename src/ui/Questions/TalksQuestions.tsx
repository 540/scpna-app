import { QuestionsAndTalksType } from '../../database'
import { Header, SectionTitle, ContentWrapper } from 'ui/_components'
import React from 'react'
import { QuestionSection } from './_components/QuestionsSection'
import { TransType } from 'ui/_hooks/useTrans'

export const QuestionsPage = ({ talks, questions, trans }: QuestionsAndTalksType & { trans: TransType }) => {
  return (
    <ContentWrapper>
      <Header />
      <SectionTitle>{trans('title')}</SectionTitle>
      <QuestionSection talks={talks} questions={questions} />
    </ContentWrapper>
  )
}

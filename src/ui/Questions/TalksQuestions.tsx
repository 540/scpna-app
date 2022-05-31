import { QuestionsAndTalksType } from '../../database'
import { Header, SectionTitle } from 'ui/_components'
import styled from '@emotion/styled'
import React from 'react'
import { QuestionSection } from './_components/QuestionsSection'
import { TransType } from 'ui/_hooks/useTrans'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: space-between;

  background-image: url('https://pamplonaswcraft.com/assets/images/bg-hero-xs.jpg');
`

export const QuestionsPage = ({ talks, questions, trans }: QuestionsAndTalksType & { trans: TransType }) => {
  return (
    <ContentWrapper>
      <Header />
      <SectionTitle>{trans('title')}</SectionTitle>
      <QuestionSection talks={talks} questions={questions} />
    </ContentWrapper>
  )
}

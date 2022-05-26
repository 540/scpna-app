import { QuestionsAndTalksType } from '../../database/database'
import { useTrans } from 'ui/_hooks/useTrans'
import { Header, SectionTitle } from 'ui/_components'
import styled from '@emotion/styled'
import { colors } from 'ui/_styles'
import React from 'react'
import { QuestionSection } from 'ui/_components/organisms/QuestionsSection'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: space-between;

  background-color: ${colors.primary};
`

export const QuestionsPage = ({ talks, questions }: QuestionsAndTalksType) => {
  const trans = useTrans('questions')

  return (
    <ContentWrapper>
      <Header />
      <SectionTitle>{trans('title')}</SectionTitle>
      <QuestionSection talks={talks} questions={questions} />
    </ContentWrapper>
  )
}

import React from 'react'
import { QuestionsPage } from './TalksQuestions'
import { QuestionsAndTalksType } from '../../database'
import { useTrans } from 'ui/_hooks/useTrans'

export const QuestionsPageController = ({ talks, questions }: QuestionsAndTalksType) => {
  const trans = useTrans('questions')

  return <QuestionsPage {...{ talks, questions, trans }} />
}

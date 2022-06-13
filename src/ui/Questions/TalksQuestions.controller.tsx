import React from 'react'
import { QuestionsPage } from './TalksQuestions'
import { QuestionsAndTalksType } from '../../database/types'

export const QuestionsPageController = ({ talks, questions }: QuestionsAndTalksType) => {
  return <QuestionsPage {...{ talks, questions }} />
}

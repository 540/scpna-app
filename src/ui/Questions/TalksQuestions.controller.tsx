import { QuestionsPage } from './TalksQuestions'
import { QuestionsAndTalksType } from '../../database'
import React from 'react'

export const QuestionsPageController = ({ talks, questions }: QuestionsAndTalksType) => {
  return <QuestionsPage talks={talks} questions={questions} />
}

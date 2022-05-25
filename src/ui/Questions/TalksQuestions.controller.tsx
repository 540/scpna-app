import { QuestionsPage } from './TalksQuestions'
import { TalksType } from '../../database/database'
import React from 'react'

export const QuestionsPageController = ({ talks }: { talks: TalksType }) => {
  return <QuestionsPage talks={talks} />
}

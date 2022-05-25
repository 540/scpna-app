import { TalksQuestions } from './TalksQuestions'
import { TalksType } from '../../database/database'
import React from 'react'

export const TalksQuestionsController = ({ talks }: { talks: TalksType }) => {
  return <TalksQuestions talks={talks} />
}

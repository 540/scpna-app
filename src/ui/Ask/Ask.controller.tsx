import { Ask } from './Ask'
import React from 'react'
import { TalksType } from 'src/database'

export const AskController = ({ talks }: { talks: TalksType }) => {
  return <Ask talks={talks} />
}

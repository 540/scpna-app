import { Home } from './Home'
import React from 'react'
import { TalksType } from 'src/database/database'

export const HomeController = ({ talks }: { talks: TalksType }) => {
  return <Home talks={talks} />
}

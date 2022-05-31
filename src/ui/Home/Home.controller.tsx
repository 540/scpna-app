import { Home } from './Home'
import React from 'react'
import { useTrans } from 'ui/_hooks/useTrans'

export const HomeController = () => {
  const trans = useTrans('home')
  return <Home trans={trans} />
}

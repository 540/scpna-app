import { useTranslation } from 'next-i18next'
import { TFunction } from 'react-i18next'

type Namespace = 'common' | 'questions' | 'ask' | 'agenda' | 'home' | 'open'
export type TransType = TFunction<Namespace, undefined>

export const useTrans = (namespace: Namespace = 'common') => {
  const { t: trans } = useTranslation(namespace)

  return trans
}

import { useTranslation } from 'next-i18next'

type Namespace = 'common' | 'questions' | 'ask' | 'agenda'

export const useTrans = (namespace: Namespace = 'common') => {
  const { t: trans } = useTranslation(namespace)

  return trans
}

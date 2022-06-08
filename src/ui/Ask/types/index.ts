import type { TransType } from 'ui/_hooks/useTrans'
import type { TalksType } from '../../../database/types'
import type { FormContainerProps, MainFormProps } from 'ui/_hooks/useForm'

export type QuestionType = {
  name: string
  email: string
  talk: string
  question: string
}

type DisplayErrorUtils = {
  displayError: boolean
  handleFormSubmit: (fn: () => void) => void
}

export type FormProps = {
  talks: TalksType
} & MainFormProps &
  DisplayErrorUtils
export type AskProps = {
  trans: TransType
  talks: TalksType
} & FormContainerProps<QuestionType> &
  DisplayErrorUtils

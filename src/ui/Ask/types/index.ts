import type { TransType } from 'ui/_hooks/useTrans'
import type { TalksType } from '../../../database'
import type { FormContainerProps, MainFormProps } from 'ui/_hooks/useForm'

export type QuestionType = {
  name: string
  email: string
  talk: string
  question: string
}

export type FormProps = {
  talks: TalksType
} & MainFormProps

export type AskProps = {
  trans: TransType
  talks: TalksType
} & FormContainerProps<QuestionType>

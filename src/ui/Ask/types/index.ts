import type { TransType } from 'ui/_hooks/useTrans'
import type { SelectBoxOptions } from 'ui/_components/atoms'
import type { TalksType } from '../../../database'
import { FormContainerProps, FormStateType } from 'ui/_hooks/useForm'

export type Values = { name: string; email: string; talk: string; question: string }

export type QuestionType = {
  name: string
  email: string
  talk: string
  question: string
}

export type FormProps = {
  talks: Array<SelectBoxOptions>
  formState: FormStateType
  formStateOpen: boolean
  snackMessage: string
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void
}

export type AskProps = {
  trans: TransType
  talks: TalksType
} & FormContainerProps<Values>

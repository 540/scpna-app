import type { FormikHelpers } from 'formik'
import type { TransType } from 'ui/_hooks/useTrans'
import type { SelectBoxOptions } from 'ui/_components/atoms'
import type { TalksType } from '../../../database'
import type { SchemaOf } from 'yup'

export type FormStateType = 'success' | 'error' | 'info'

export type Values = { name: string; email: string; talk: string; question: string }

export type OnFormikSubmit = (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>

export type QuestionType = {
  name: string
  email: string
  talk: string
  question: string
}

type CommonFormAndAskProps = {
  formState: FormStateType
  formStateOpen: boolean
  snackMessage: string
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void
}

export type FormProps = {
  talks: Array<SelectBoxOptions>
} & CommonFormAndAskProps

export type AskProps = {
  trans: TransType
  talks: TalksType
  initialValues: { name: string; email: string; talk: string; question: string }
  onFormSubmit: OnFormikSubmit
  validationSchema: SchemaOf<Values>
} & CommonFormAndAskProps

import type { FormikHelpers } from 'formik'

export type FormStateType = 'success' | 'error' | 'info'

type Values = { name: string; email: string; talk: string; question: string }

export type OnFormikSubmit = (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>

export type QuestionType = {
  name: string
  email: string
  talk: string
  question: string
}

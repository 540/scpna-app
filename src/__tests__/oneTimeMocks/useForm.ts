import type { FormikHelpers } from 'formik'
import { SchemaOf } from 'yup'

export type FormStateType = 'success' | 'error' | 'info'

export type MainFormProps = {
  formState: FormStateType
  formStateOpen: boolean
  snackMessage: string
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void
}

export type FormContainerProps<FullValues, SchemaValues = FullValues> = {
  initialValues: FullValues
  onFormSubmit: OnFormikSubmit<FullValues>
  validationSchema: SchemaOf<SchemaValues>
} & MainFormProps

type useFormProps<Values> = {
  message: { success: string; sending: string; error: string }
  asyncFunc: (values: Values) => Promise<number>
  resetFormProps: Values
}

type OnFormikSubmit<Values> = (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>

export const useForm = <Values>({ asyncFunc, resetFormProps }: useFormProps<Values>) => {
  const formState = 'success' as FormStateType
  const formStateOpen = false
  const snackMessage = ''
  const displayError = false

  const handleFormSubmit = (contextSubmit: () => void) => {
    contextSubmit()
  }

  const setLoadingForm = jest.fn()
  const setSuccessForm = jest.fn()
  const setErrorForm = jest.fn()

  const handleClose = jest.fn()

  const onFormSubmit: OnFormikSubmit<Values> = async (values, { resetForm }) => {
    setLoadingForm()
    try {
      const response = await asyncFunc(values)
      if (response == 200) {
        setSuccessForm()
        resetForm({ values: resetFormProps })
      } else {
        setErrorForm()
      }
    } catch (e) {
      setErrorForm()
    }
  }

  return { formState, formStateOpen, snackMessage, handleClose, onFormSubmit, displayError, handleFormSubmit }
}

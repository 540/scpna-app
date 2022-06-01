import React from 'react'
import { FormStateType } from 'ui/Ask/types'
import type { FormikHelpers } from 'formik'

type useFormProps<Values> = {
  message: { success: string; sending: string; error: string }
  asyncFunc: (values: Values) => Promise<number>
  resetFormProps: Values
}

type OnFormikSubmit<Values> = (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>

export const useForm = <Values>({ message, asyncFunc, resetFormProps }: useFormProps<Values>) => {
  const [formState, setFormState] = React.useState<FormStateType>('success')
  const [formStateOpen, setFormStateOpen] = React.useState(false)
  const [snackMessage, setSnackMessage] = React.useState('')

  const setLoadingForm = () => {
    setFormState('info')
    setFormStateOpen(true)
    setSnackMessage(message.sending)
  }
  const setSuccessForm = () => {
    setFormState('success')
    setFormStateOpen(true)
    setSnackMessage(message.success)
  }
  const setErrorForm = () => {
    setFormState('error')
    setFormStateOpen(true)
    setSnackMessage(message.error)
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setFormStateOpen(false)
  }

  const onFormSubmit: OnFormikSubmit<Values> = async (values, { resetForm }) => {
    setLoadingForm()
    const response = await asyncFunc(values)
    if (response == 200) {
      setSuccessForm()
      resetForm({ values: resetFormProps })
    } else {
      setErrorForm()
    }
  }

  return { formState, formStateOpen, snackMessage, handleClose, onFormSubmit }
}

import { Ask } from './Ask'
import React from 'react'
import { TalksType } from 'src/database'
import { useTrans } from 'ui/_hooks/useTrans'
import { FormStateType, OnFormikSubmit, QuestionType } from './types/'
import * as yup from 'yup'

const pushQuestion = (data: QuestionType): Promise<number> => {
  return fetch('/api/pushQuestion', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/jso'
    }
  }).then(res => res.json())
}

export const AskController = ({ talks }: { talks: TalksType }) => {
  const trans = useTrans('ask')

  const validationSchema = yup.object({
    name: yup.string().trim().required(trans('error_name_required')),
    email: yup.string().email(trans('error_email_invalid')).required(trans('error_email_required')),
    question: yup.string().trim().required(trans('error_question_required')),
    talk: yup.mixed().notOneOf(['0'], trans('error_talk_required'))
  })

  const [formState, setFormState] = React.useState<FormStateType>('success')
  const [formStateOpen, setFormStateOpen] = React.useState(false)
  const [snackMessage, setSnackMessage] = React.useState('')

  const initialValues = { name: '', email: '', talk: '0', question: '' }

  const setLoadingForm = () => {
    setFormState('info')
    setFormStateOpen(true)
    setSnackMessage(trans('toast_sending'))
  }
  const setSuccessForm = () => {
    setFormState('success')
    setFormStateOpen(true)
    setSnackMessage(trans('toast_success'))
  }
  const setErrorForm = () => {
    setFormState('error')
    setFormStateOpen(true)
    setSnackMessage(trans('toast_error'))
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setFormStateOpen(false)
  }

  const onFormSubmit: OnFormikSubmit = async (values, { resetForm }) => {
    setLoadingForm()
    const response = await pushQuestion(values)
    if (response == 200) {
      setSuccessForm()
      resetForm({ values: { name: '', email: '', talk: '0', question: '' } })
    } else {
      setErrorForm()
    }
  }

  return (
    <Ask
      {...{
        talks,
        trans,
        initialValues,
        formState,
        formStateOpen,
        snackMessage,
        handleClose,
        onFormSubmit,
        validationSchema
      }}
    />
  )
}

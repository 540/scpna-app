import { Ask } from './Ask'
import React from 'react'
import { TalksType } from 'src/database/types'
import { useTrans } from 'ui/_hooks/useTrans'
import { QuestionType } from './types/'
import * as yup from 'yup'
import { useForm } from 'ui/_hooks/useForm'

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

  const initialValues = { name: '', email: '', talk: '0', question: '' }

  const message = {
    sending: trans('toast_sending'),
    success: trans('toast_success'),
    error: trans('toast_error')
  }

  const { formState, formStateOpen, snackMessage, handleClose, onFormSubmit, displayError, handleFormSubmit } =
    useForm<QuestionType>({
      message,
      asyncFunc: pushQuestion,
      resetFormProps: initialValues
    })

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
        validationSchema,
        displayError,
        handleFormSubmit
      }}
    />
  )
}

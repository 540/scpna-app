import { Ask } from './Ask'
import React from 'react'
import { TalksType } from 'src/database'
import { useTrans } from 'ui/_hooks/useTrans'
import { Values } from './types/'
import * as yup from 'yup'
import { useForm } from 'ui/_hooks/useForm'
import { pushQuestion } from 'src/database/'

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

  const { formState, formStateOpen, snackMessage, handleClose, onFormSubmit } = useForm<Values>({
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
        validationSchema
      }}
    />
  )
}

import { Header, ContentWrapper } from 'ui/_components'
import { Form } from './_components/Form'
import React from 'react'
import { Formik } from 'formik'
import { AskProps } from './types'

export const Ask = ({
  talks,
  initialValues,
  formState,
  formStateOpen,
  snackMessage,
  handleClose,
  onFormSubmit,
  validationSchema,
  displayError,
  handleFormSubmit
}: AskProps) => {
  return (
    <ContentWrapper>
      <Header />
      <Formik onSubmit={onFormSubmit} {...{ initialValues, validationSchema }} validateOnBlur={false}>
        <Form {...{ talks, formState, formStateOpen, snackMessage, handleClose, displayError, handleFormSubmit }} />
      </Formik>
    </ContentWrapper>
  )
}

import { Header, SectionTitle, ContentWrapper } from 'ui/_components'
import { Form } from './_components/Form'
import React from 'react'
import { Formik } from 'formik'
import { AskProps } from './types'

export const Ask = ({
  trans,
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
      <SectionTitle>{trans('title')}</SectionTitle>
      <Formik onSubmit={onFormSubmit} {...{ initialValues, validationSchema }} validateOnBlur={false}>
        <Form {...{ talks, formState, formStateOpen, snackMessage, handleClose, displayError, handleFormSubmit }} />
      </Formik>
    </ContentWrapper>
  )
}

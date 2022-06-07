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
  validationSchema
}: AskProps) => {
  return (
    <ContentWrapper>
      <Header />
      <SectionTitle>{trans('title')}</SectionTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={onFormSubmit}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
      >
        <Form
          talks={talks}
          formState={formState}
          formStateOpen={formStateOpen}
          snackMessage={snackMessage}
          handleClose={handleClose}
        />
      </Formik>
    </ContentWrapper>
  )
}

import { Header, SectionTitle } from 'ui/_components'
import { Form } from './_components/Form'
import styled from '@emotion/styled'
import React from 'react'
import { Formik } from 'formik'
import { AskProps } from './types'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: space-between;

  background-image: url('https://pamplonaswcraft.com/assets/images/bg-hero-xs.jpg');
`

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

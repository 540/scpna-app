import { Header, SectionTitle } from 'ui/_components'
import { Form } from './_components/Form'
import styled from '@emotion/styled'
import React from 'react'
import * as yup from 'yup'
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

const validationSchema = yup.object({
  name: yup.string().trim().required('Name is required!'),
  email: yup.string().email('Enter a valid email').required('Email is required!'),
  talk: yup.mixed().notOneOf(['0'], 'You need to select a talk!'),
  question: yup.string().trim().required('You have to write a question!')
})

export const Ask = ({
  trans,
  talks,
  initialValues,
  formState,
  formStateOpen,
  snackMessage,
  handleClose,
  onFormSubmit
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

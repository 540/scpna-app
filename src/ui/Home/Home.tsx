import { useTrans } from 'ui/_hooks/useTrans'
import { Header, Form, SectionTitle } from 'ui/_components'
import styled from '@emotion/styled'
import { colors } from 'ui/_styles'
import React from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { TalksType } from '../../database/database'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: space-between;

  background-color: ${colors.primary};
`

const validationSchema = yup.object({
  name: yup.string().trim().required('Name is required!'),
  email: yup.string().email('Enter a valid email').required('Email is required!'),
  talk: yup.mixed().notOneOf(['0'], 'You need to select a speech!'),
  question: yup.string().trim().required('You have to write a question!')
})

type QuestionType = {
  name: string
  email: string
  talk: string
  question: string
}

const pushQuestion = async (data: QuestionType) =>
  fetch('/api/pushQuestion', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/jso'
    }
  })

export const Home = ({ talks }: { talks: TalksType }) => {
  const trans = useTrans()

  return (
    <ContentWrapper>
      <Header />
      <SectionTitle>{trans('talks_section_title')}</SectionTitle>
      <Formik
        initialValues={{ name: '', email: '', talk: '0', question: '' }}
        onSubmit={(values, actions) => {
          pushQuestion(values)
          actions.setSubmitting(false)
        }}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
      >
        <Form talks={talks} />
      </Formik>
    </ContentWrapper>
  )
}

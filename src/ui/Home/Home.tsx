import { useTrans } from 'ui/_hooks/useTrans'
import { Header, Form, SectionTitle } from 'ui/_components'
import styled from '@emotion/styled'
import { colors } from 'ui/_styles'
import React from 'react'
import * as yup from 'yup'

import { Formik } from 'formik'

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
  email: yup.string().email('Enter a valid email').required('Email is required!'),
  nombre: yup.string().required('Name is required!'),
  pregunta: yup.string().required('You have to write a question!')
})

export const Home = () => {
  const trans = useTrans()

  const talks = [
    { value: 'c1', text: 'Charla 1' },
    { value: 'c2', text: 'Charla 2' },
    { value: 'c3', text: 'Charla 3' }
  ]

  return (
    <ContentWrapper>
      <Header />
      <SectionTitle>{trans('talks_section_title')}</SectionTitle>
      <Formik
        initialValues={{ nombre: '', email: '', charla: '', pregunta: '' }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }}
        validationSchema={validationSchema}
      >
        <Form talks={talks} />
      </Formik>
    </ContentWrapper>
  )
}

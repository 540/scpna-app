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

const pushQuestion = (data: QuestionType): Promise<number> => {
  return fetch('/api/pushQuestion', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/jso'
    }
  }).then(res => res.json())
}

export const Ask = ({ talks }: { talks: TalksType }) => {
  const [formState, setFormState] = React.useState<'success' | 'error' | 'info'>('success')
  const [formStateOpen, setFormStateOpen] = React.useState(false)
  const [snackMessage, setSnackMessage] = React.useState('')

  const setLoadingForm = () => {
    setFormState('info')
    setFormStateOpen(true)
    setSnackMessage('Enviando...')
  }
  const setSuccessForm = () => {
    setFormState('success')
    setFormStateOpen(true)
    setSnackMessage('Pregunta enviada correctamente')
  }
  const setErrorForm = () => {
    setFormState('error')
    setFormStateOpen(true)
    setSnackMessage('¡Pregunta no enviada!')
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setFormStateOpen(false)
  }

  const trans = useTrans()
  return (
    <ContentWrapper>
      <Header />
      <SectionTitle>{trans('talks_section_title')}</SectionTitle>
      <Formik
        initialValues={{ name: '', email: '', talk: '0', question: '' }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setLoadingForm()
          const response = await pushQuestion(values)
          setSubmitting(false)
          if (response == 200) {
            setSuccessForm()
            resetForm({ values: { name: '', email: '', talk: '0', question: '' } })
          } else {
            setErrorForm()
          }
        }}
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

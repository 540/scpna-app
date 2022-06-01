import { Formik } from 'formik'
import { ContentWrapper, Header, SectionTitle } from 'ui/_components'
import { FormContainerProps } from 'ui/_hooks/useForm'
import { TransType } from 'ui/_hooks/useTrans'
import { OpenDataType } from './types'
import { Form } from './_components'

export const Open = ({
  trans,
  formState,
  formStateOpen,
  snackMessage,
  handleClose,
  onFormSubmit,
  validationSchema,
  initialValues
}: FormContainerProps<OpenDataType, Omit<OpenDataType, 'projector'>> & { trans: TransType }) => {
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
          formState={formState}
          formStateOpen={formStateOpen}
          snackMessage={snackMessage}
          handleClose={handleClose}
        />
      </Formik>
    </ContentWrapper>
  )
}

import { Formik } from 'formik'
import { ContentWrapper, Header, SectionTitle } from 'ui/_components'
import { FormContainerProps } from 'ui/_hooks/useForm'
import { TransType } from 'ui/_hooks/useTrans'
import { OpenDataType } from './types'
import { Form, RadioContentType } from './_components'

export const Open = ({
  trans,
  formState,
  formStateOpen,
  snackMessage,
  handleClose,
  onFormSubmit,
  validationSchema,
  initialValues,
  durationValues,
  projectorValues
}: FormContainerProps<OpenDataType, Omit<OpenDataType, 'projector'>> & {
  trans: TransType
  durationValues: RadioContentType
  projectorValues: RadioContentType
}) => {
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
          durationValues={durationValues}
          projectorValues={projectorValues}
        />
      </Formik>
    </ContentWrapper>
  )
}

import React from 'react'
import styled from '@emotion/styled'

import { SelectBoxFormik, BigFormInputFormik, SmallFormInputFormik, FormButton } from 'ui/_components/molecules'
import { useTrans } from 'ui/_hooks/useTrans'

import { useFormikContext, Form as FormikForm, FormikProps } from 'formik'

import { Snackbar } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { FormProps } from '../types'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const FormWrapper = styled(FormikForm)`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;

  padding: 30px 50px 40px 50px;

  justify-content: flex-start;
`

export const Form = ({
  talks,
  formState,
  formStateOpen,
  snackMessage,
  handleClose,
  displayError,
  handleFormSubmit
}: FormProps) => {
  const context: FormikProps<{ name: string; email: string; question: string; talk: string }> = useFormikContext()
  const trans = useTrans('ask')

  return (
    <FormWrapper>
      <SmallFormInputFormik
        name="name"
        error={context.errors.name}
        value={context.values.name}
        label={trans('label_name')}
        onChange={context.handleChange}
        maxLength={20}
        displayError={displayError}
      />
      <SmallFormInputFormik
        name="email"
        error={context.errors.email}
        value={context.values.email}
        label={trans('label_email')}
        onChange={context.handleChange}
        maxLength={40}
        displayError={displayError}
      />
      <BigFormInputFormik
        name="question"
        error={context.errors.question}
        value={context.values.question}
        label={trans('label_question')}
        onChange={context.handleChange}
        maxLength={100}
        displayError={displayError}
      />
      <SelectBoxFormik
        title={trans('label_talk')}
        options={talks}
        error={context.errors.talk}
        value={context.values.talk}
        onChange={context.handleChange}
        alignItems="flex-start"
        name="talk"
        displayError={displayError}
      />
      <FormButton onClick={() => handleFormSubmit(context.handleSubmit)}>{trans('label_button')}</FormButton>
      <Snackbar open={formStateOpen} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={formState} sx={{ width: '100%' }}>
          {snackMessage}
        </Alert>
      </Snackbar>
    </FormWrapper>
  )
}

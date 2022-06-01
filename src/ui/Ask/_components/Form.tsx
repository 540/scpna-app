import React from 'react'
import styled from '@emotion/styled'

import { SelectBox } from 'ui/_components/molecules'
import { useTrans } from 'ui/_hooks/useTrans'

import { SmallFormInput } from './SmallFormInput'
import { BigFormInput } from './BigFormInput'
import { FormButton } from './FormButton'
import { useFormikContext, Form as FormikForm, FormikProps } from 'formik'

import { SelectChangeEvent, Snackbar } from '@mui/material'
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

  justify-content: space-around;
`

export const Form = ({ talks, formState, formStateOpen, snackMessage, handleClose }: FormProps) => {
  const context: FormikProps<{ name: string; email: string; question: string; talk: string }> = useFormikContext()
  const trans = useTrans('ask')

  const checkValues = (
    e: React.ChangeEvent<any> | SelectChangeEvent<string>,
    field: 'name' | 'email' | 'question' | 'talk'
  ) => {
    context.handleChange(e)
    if (context.errors[field]) {
      context.validateField(field)
    }
  }

  return (
    <FormWrapper>
      <SmallFormInput
        name="name"
        error={context.errors.name}
        value={context.values.name}
        label={trans('label_name')}
        onChange={e => checkValues(e, 'name')}
        maxLength={20}
      />
      <SmallFormInput
        name="email"
        error={context.errors.email}
        value={context.values.email}
        label={trans('label_email')}
        onChange={e => checkValues(e, 'email')}
        maxLength={40}
      />
      <BigFormInput
        name="question"
        error={context.errors.question}
        value={context.values.question}
        label={trans('label_question')}
        onChange={e => checkValues(e, 'question')}
        maxLength={100}
      />
      <SelectBox
        title={trans('label_talk')}
        options={talks}
        error={context.errors.talk}
        value={context.values.talk}
        onChange={e => checkValues(e as SelectChangeEvent<string>, 'talk')}
        alignItems="flex-start"
        name="talk"
      />
      <FormButton>{trans('label_button')}</FormButton>
      <Snackbar open={formStateOpen} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={formState} sx={{ width: '100%' }}>
          {snackMessage}
        </Alert>
      </Snackbar>
    </FormWrapper>
  )
}

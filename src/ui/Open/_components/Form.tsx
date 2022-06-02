import React from 'react'
import styled from '@emotion/styled'

import { SmallFormInput, FormButton, BigFormInput } from 'ui/_components/molecules'
import { useTrans } from 'ui/_hooks/useTrans'

import { useFormikContext, Form as FormikForm, FormikProps } from 'formik'

import { SelectChangeEvent, Snackbar } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

import { MainFormProps } from 'ui/_hooks/useForm'
import { OpenDataType } from '../types'
import { RadioOptions } from '.'
import { RadioContentType } from './RadioOptions'

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

export const Form = ({
  formState,
  formStateOpen,
  snackMessage,
  handleClose,
  durationValues,
  projectorValues
}: MainFormProps & {
  durationValues: RadioContentType
  projectorValues: RadioContentType
}) => {
  const context: FormikProps<OpenDataType> = useFormikContext()
  const trans = useTrans('open')

  const checkValues = (
    e: React.ChangeEvent<any> | SelectChangeEvent<string>,
    field: 'fullName' | 'email' | 'title' | 'description' | 'duration' | 'projector'
  ) => {
    context.handleChange(e)
    if (context.errors[field]) {
      context.validateField(field)
    }
  }

  return (
    <FormWrapper>
      <SmallFormInput
        name="title"
        error={context.errors.title}
        value={context.values.title}
        label={trans('label_talk-title')}
        onChange={e => checkValues(e, 'title')}
        maxLength={20}
      />
      <BigFormInput
        name="description"
        error={context.errors.description}
        value={context.values.description}
        label={trans('label_description')}
        onChange={e => checkValues(e, 'description')}
        maxLength={20}
      />
      <SmallFormInput
        name="fullName"
        error={context.errors.fullName}
        value={context.values.fullName}
        label={trans('label_fullName')}
        onChange={e => checkValues(e, 'fullName')}
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
      <RadioOptions
        name="projector"
        error={context.errors.projector}
        formValue={context.values.projector}
        formLabel={trans('label_projector')}
        onChange={e => checkValues(e, 'projector')}
        radioValues={projectorValues}
        required
      />
      <RadioOptions
        name="duration"
        error={context.errors.duration}
        formValue={context.values.duration}
        formLabel={trans('label_duration')}
        onChange={e => checkValues(e, 'duration')}
        radioValues={durationValues}
        required
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

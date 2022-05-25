import React from 'react'
import styled from '@emotion/styled'
import { FormButton, BigFormInput, SelectBox, SmallFormInput } from '../molecules'
import type { SelectBoxOptions } from '../atoms'
import { useFormikContext, Form as FormikForm, FormikProps } from 'formik'

import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { SelectChangeEvent } from '@mui/material'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const FormWrapper = styled(FormikForm)`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  background-color: #242d2f;

  padding: 30px 50px 40px 50px;

  justify-content: space-around;

  background-image: url('https://pamplonaswcraft.com/assets/images/bg-hero-xs.jpg');
`

export const Form = ({
  talks,
  formState,
  formStateOpen,
  snackMessage,
  handleClose
}: {
  talks: Array<SelectBoxOptions>
  formState: 'success' | 'error' | 'info'
  formStateOpen: boolean
  snackMessage: string
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void
}) => {
  const context: FormikProps<{ name: string; email: string; question: string; talk: string }> = useFormikContext()

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
        label="nombre"
        onChange={e => checkValues(e, 'name')}
        maxLength={20}
      />
      <SmallFormInput
        name="email"
        error={context.errors.email}
        value={context.values.email}
        label="email"
        onChange={e => checkValues(e, 'email')}
        maxLength={40}
      />
      <BigFormInput
        name="question"
        error={context.errors.question}
        value={context.values.question}
        label="pregunta"
        onChange={e => checkValues(e, 'question')}
        maxLength={100}
      />
      <SelectBox
        title="Charla"
        options={talks}
        error={context.errors.talk}
        value={context.values.talk}
        onChange={e => checkValues(e as SelectChangeEvent<string>, 'talk')}
        justifyContent="flex-start"
        name="talk"
      />
      <FormButton>Enviar</FormButton>
      <Snackbar open={formStateOpen} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={formState} sx={{ width: '100%' }}>
          {snackMessage}
        </Alert>
      </Snackbar>
    </FormWrapper>
  )
}

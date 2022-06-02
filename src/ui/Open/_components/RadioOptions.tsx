import React from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { colors } from 'ui/_styles'
import { ErrorDiv } from 'ui/_components/atoms'
import { ErrorMessage } from 'formik'

export type RadioContentType = {
  value: string
  label: string
}[]

type RadioOptionsProps = {
  formLabel: string
  name: string
  formValue: string
  radioValues: RadioContentType
  defaultValue?: string
  required?: boolean
  onChange: (e: React.ChangeEvent<unknown>) => void
  error: string | undefined
}

export const RadioOptions = ({
  formLabel,
  radioValues,
  name,
  formValue,
  defaultValue = '',
  required = false,
  onChange,
  error = ''
}: RadioOptionsProps) => {
  return (
    <FormControl required={required} error={error ? true : false}>
      <FormLabel sx={{ color: colors.primary }}>{formLabel}</FormLabel>
      <RadioGroup name={name} value={formValue} row defaultValue={defaultValue}>
        {radioValues.map(item => {
          return (
            <FormControlLabel
              onChange={onChange}
              sx={{ color: colors.primary }}
              value={item.value}
              label={item.label}
              key={item.value}
              control={<Radio color="secondary" sx={{ color: 'white' }} />}
            />
          )
        })}
      </RadioGroup>
      <ErrorMessage name={name}>{msg => <ErrorDiv>{msg}</ErrorDiv>}</ErrorMessage>
    </FormControl>
  )
}

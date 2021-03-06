import React from 'react'
export type InputProps = {
  value?: string
  displayError?: boolean
  name?: string
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string | boolean
  maxLength?: number
}

export type SelectBoxOptions = {
  value: string
  text: string
}

import { SelectChangeEvent } from '@mui/material'

export type SelectBoxProps = {
  title?: string
  options?: Array<SelectBoxOptions>
  value?: string | number
  name?: string
  onChange?: (e: SelectChangeEvent<unknown>) => void
  error?: string | boolean
  displayError?: boolean
}

import React from 'react'
export type InputProps = {
  value?: string
  name?: string
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string | boolean
}

export type SelectBoxOptions = {
  value: string
  text: string
}

export type SelectBoxProps = {
  title?: string
  options?: Array<SelectBoxOptions>
  value?: string | number
  name?: string
  error?: string | boolean
  onChange?: 
}

/* eslint-disable prettier/prettier */
import { TextField } from '@mui/material'
import { Color, FontSize, toColor, toFontSize } from 'ui/_styles'
import { ReactNode } from 'react'

interface Props {
  value?: string
  color?: Color
}

export const CustomTextField = ({ value = '', color = 'text' }: Props) => (
    <TextField label={value} variant="outlined" InputLabelProps={{style: {color: 'white'}}}/>
)
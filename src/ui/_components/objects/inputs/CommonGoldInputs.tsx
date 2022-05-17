/* eslint-disable prettier/prettier */
import { TextField } from '@mui/material'
import InputProps from './inputProps'

export const CommonGoldInput = ({ value = '' }: InputProps) => (
  <TextField label={value} variant="outlined" InputLabelProps={{style: {color: 'white'}}} />
)
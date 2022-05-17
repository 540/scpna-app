/* eslint-disable prettier/prettier */
import { TextField } from '@mui/material'
import InputProps from './inputProps'

export const BigGoldInput= ({ value = '' }: InputProps) => (
  <TextField label={value} variant="outlined" multiline rows={4} InputLabelProps={{style: {color: 'white'}}}/>
)
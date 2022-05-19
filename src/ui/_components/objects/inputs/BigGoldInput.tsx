/* eslint-disable prettier/prettier */
import { TextField } from '@mui/material'
import InputProps from './inputProps'
import { DefaultFormElementWrapper } from '../../index'

export const BigGoldInput= ({ value = '' }: InputProps) => (
  <DefaultFormElementWrapper>
    <TextField label={value} variant="outlined" multiline rows={4} InputLabelProps={{style: {color: 'white'}}}/>
  </DefaultFormElementWrapper>
)
/* eslint-disable prettier/prettier */
import { TextField } from '@mui/material'
import InputProps from './inputProps'
import { DefaultFormElementWrapper } from '../../index'


export const CommonGoldInput = ({ value = '' }: InputProps) => (
  <DefaultFormElementWrapper>
    <TextField label={value} variant="outlined" InputLabelProps={{style: {color: 'white'}}} />
  </DefaultFormElementWrapper>
)
/* eslint-disable prettier/prettier */
import { TextField } from '@mui/material'
import InputProps from './inputProps'
import styled from '@emotion/styled'
import { colors } from "../../../_styles/settings/colors";
import { DefaultFormElementWrapper } from '../../index'

const  StyledTextField = styled(TextField)({
  textarea: {
    color: colors.white,
  },
});

export const BigGoldInput = ({ value = '' }: InputProps) => (
  <DefaultFormElementWrapper>
    <StyledTextField label={value} variant="outlined" multiline rows={4} InputLabelProps={{style: {color: colors.primary}}}/>
  </DefaultFormElementWrapper>
)
/* eslint-disable prettier/prettier */
import { TextField } from '@mui/material'
import InputProps from './inputProps'
import styled from '@emotion/styled'
import { colors } from "../../../_styles/settings/colors";
import { DefaultFormElementWrapper } from '../../index'

const  StyledTextField = styled(TextField)({
  width: '100%',
  textarea: {
    color: colors.white,
  },
});

//will need to be refactored with the CommonGoldInput box
const OutlinedInputStyle = {
  borderRadius: '20px',
}

export const BigGoldInput = ({ value = '' }: InputProps) => (
  <DefaultFormElementWrapper>
    <StyledTextField label={value} variant="outlined" multiline rows={4} InputLabelProps={{style: {color: colors.primary}}} InputProps={{style: OutlinedInputStyle}}/>
  </DefaultFormElementWrapper>
)
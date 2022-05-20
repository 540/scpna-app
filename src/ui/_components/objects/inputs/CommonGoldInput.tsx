import { TextField } from '@mui/material'
import { colors } from '../../../_styles/settings/colors'
import InputProps from './inputProps'
import styled from '@emotion/styled'
import { DefaultFormElementWrapper } from '../../index'

const StyledTextField = styled(TextField)({
  width: '100%',
  input: {
    color: colors.white
  }
})

const OutlinedInputStyle = {
  borderRadius: '20px'
}

export const CommonGoldInput = ({ value = '' }: InputProps) => (
  <DefaultFormElementWrapper>
    <StyledTextField
      label={value}
      variant="outlined"
      InputLabelProps={{ style: { color: colors.primary } }}
      InputProps={{ style: OutlinedInputStyle }}
    />
  </DefaultFormElementWrapper>
)

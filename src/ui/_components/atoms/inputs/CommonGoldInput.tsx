import { TextField } from '@mui/material'
import { colors } from '../../../_styles/settings/colors'
import styled from '@emotion/styled'

export default interface Props {
  value?: string
}

const StyledTextField = styled(TextField)({
  width: '100%',
  input: {
    color: colors.white
  }
})

const OutlinedInputStyle = {
  borderRadius: '20px'
}

export const CommonGoldInput = ({ value = '' }: Props) => (
  <StyledTextField
    label={value}
    variant="outlined"
    InputLabelProps={{ style: { color: colors.primary } }}
    InputProps={{ style: OutlinedInputStyle }}
  />
)

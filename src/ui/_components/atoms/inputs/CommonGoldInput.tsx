import { TextField } from '@mui/material'
import { colors } from '../../../_styles/settings/colors'
import styled from '@emotion/styled'
import { InputProps } from '../'

const StyledTextField = styled(TextField)({
  width: '100%',
  input: {
    color: colors.white
  }
})

const OutlinedInputStyle = {
  borderRadius: '20px'
}

export const CommonGoldInput = ({ value = '', name, onChange }: InputProps) => (
  <StyledTextField
    label={name}
    variant="outlined"
    InputLabelProps={{ style: { color: colors.primary } }}
    InputProps={{ style: OutlinedInputStyle }}
    name={name}
    value={value}
    onChange={onChange}
  />
)

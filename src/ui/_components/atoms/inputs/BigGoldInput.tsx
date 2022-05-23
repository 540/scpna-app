import { TextField } from '@mui/material'
import styled from '@emotion/styled'
import { colors } from '../../../_styles/settings/colors'
import { InputProps } from '../'

const StyledTextField = styled(TextField)({
  width: '100%',
  textarea: {
    color: colors.white
  }
})

const OutlinedInputStyle = {
  borderRadius: '20px'
}

export const BigGoldInput = ({ value = '', name, onChange }: InputProps) => (
  <StyledTextField
    label={name}
    variant="outlined"
    multiline
    rows={4}
    InputLabelProps={{ style: { color: colors.primary } }}
    InputProps={{ style: OutlinedInputStyle }}
    name={name}
    onChange={onChange}
  />
)

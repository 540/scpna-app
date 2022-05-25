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

export const CommonGoldInput = ({ value = '', name, label, onChange, error, maxLength }: InputProps) => (
  <StyledTextField
    label={label}
    variant="outlined"
    InputLabelProps={{ style: { color: colors.primary } }}
    InputProps={{ style: OutlinedInputStyle }}
    inputProps={{ maxLength: maxLength ?? -1 }}
    name={name}
    value={value}
    error={error ? true : false}
    onChange={onChange}
  />
)

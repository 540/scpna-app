import { MenuItem, Select } from '@mui/material'
import styled from '@emotion/styled'
import { colors } from 'ui/_styles'
import * as React from 'react'
import { SelectBoxProps } from './InputProps'

const StyledSelect = styled(Select)`
  color: ${colors.background};
  background-color: ${colors.primary};
  width: 70%;
  height: 80%;
`

export const GoldSelectBox = ({
  title = 'Selecciona',
  options = [{ value: 'op1', text: 'Opción 1' }],
  value,
  onChange,
  name,
  error
}: SelectBoxProps) => {
  return (
    <StyledSelect name={name} value={value} onChange={onChange} error={error ? true : false}>
      <MenuItem value={0} disabled style={{ display: 'none' }}>
        {title}
      </MenuItem>
      {options.map(item => {
        return (
          <MenuItem key={item.value} value={item.value}>
            {item.text}
          </MenuItem>
        )
      })}
    </StyledSelect>
  )
}

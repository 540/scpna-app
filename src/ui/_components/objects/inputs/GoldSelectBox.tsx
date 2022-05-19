/* eslint-disable prettier/prettier */
import { MenuItem, Select, SelectChangeEvent} from '@mui/material'
import styled from '@emotion/styled'
import { colors } from 'ui/_styles'
import * as React from 'react';

interface Props {
  title?: string,
  options?: Array<any>
}

const StyledSelect = styled(Select)`
   color: ${colors.background};
   background-color: ${colors.primary}

`

export const GoldSelectBox = ({ title = 'Selecciona', options = [{value: 'op1', text: 'Opción 1'}]}: Props) => {
  const [option, setOption] = React.useState('');
  const setLabel = option != '' ? option : 0;

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };

  return (
    <StyledSelect value={setLabel}  onChange={(event) => handleChange(event as SelectChangeEvent)} >
        <MenuItem value={0} disabled>{title}</MenuItem>
        {options.map(item => {
          return (<MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>);
        })}
    </StyledSelect>
  );
}
/* eslint-disable prettier/prettier */
/** @jsxImportSource @emotion/react */
import { InputLabel, MenuItem, FormControl, Select, SelectChangeEvent} from '@mui/material'
import styled from '@emotion/styled'
import { jsx, css } from "@emotion/react"
import { colors } from 'ui/_styles'
import * as React from 'react';
import { red } from '@mui/material/colors';
import { useEffect } from 'react';

interface Props {
  title?: string,
  options?: Array<any>
}

const StyledSelect = styled(Select)({
  ".MuiSelect-select": {
    color: colors.background,
    backgroundColor: colors.primary
  },
  ".MuiPaper-root": {
    color: colors.background,
    backgroundColor: colors.primary
  }
});

export const GoldSelectBox = ({ title = 'Selecciona', options = [{value: 'op1', text: 'Opción 1'}]}: Props) => {
  //TODO: Handle useState hook for obtaining the value from the selectbox
  const [option, setOption] = React.useState('');
  const setLabel = option != '' ? option : 0;

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };

  return (
    <StyledSelect value={setLabel} onChange={(event) => handleChange(event as SelectChangeEvent)} >
        <MenuItem value={0} disabled>{title}</MenuItem>
        {options.map(item => {
          return (<MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>);
        })}
    </StyledSelect>
  );
}
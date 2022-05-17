/* eslint-disable prettier/prettier */
import { InputLabel, MenuItem, FormControl, Select, SelectChangeEvent, InputBase, styled } from '@mui/material'
import { Color } from 'ui/_styles'
import { theme } from 'ui/_styles/theme'
import * as React from 'react';

interface Props {
  value?: string
}
/*
TODO: Check styled selectbox and apply styles to it
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    color: theme.palette.secondary,
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.primary,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
  input={<BootstrapInput />}
}));*/



export const GoldSelectBox = ({ value = ''}: Props) => {
  //TODO: Handle useState hook for obtaining the value from the selectbox
  const [option, setOption] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };
  //TODO: Handle render of options given in component props
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">{value}</InputLabel>
        <Select
          value={option ?? value}
          onChange={handleChange}
        >
          <MenuItem value={10}>Charla 1</MenuItem>
          <MenuItem value={20}>Charla 2</MenuItem>
          <MenuItem value={30}>Charla 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
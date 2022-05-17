/* eslint-disable prettier/prettier */
import { InputLabel, MenuItem, FormControl, Select, SelectChangeEvent} from '@mui/material'
import { Color } from 'ui/_styles'
import * as React from 'react';

interface Props {
  value?: string
}


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
          label={value}
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
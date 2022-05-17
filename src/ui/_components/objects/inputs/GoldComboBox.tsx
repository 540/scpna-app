/* eslint-disable prettier/prettier */
import { InputLabel, MenuItem, FormControl, Select, SelectChangeEvent} from '@mui/material'
import { Color } from 'ui/_styles'
import * as React from 'react';

interface Props {
  value?: string
}


export const GoldComboBox = ({ value = ''}: Props) => {
  //TODO: Handle useState hook for obtaining the value from the selectbox
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
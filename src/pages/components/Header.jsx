import React from "react";
import {FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";

const Header = ({ country, setCountry }) => {
  return (
    <div>
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={country}
          onChange={event => setCountry(event.target.value)}
          labelWidth="Country"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
};

export default Header;
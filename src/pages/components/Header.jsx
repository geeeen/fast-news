import React from "react";
import { Select, MenuItem, Switch, Tooltip } from "@material-ui/core";
import { COUNTRIES, COUNTRY_FULL_NAME } from "../../constants";
import styled from "@emotion/styled";

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Header = ({ country, setCountry, colored, setColored }) => {
  return (
    <Actions>
      <Tooltip title="Country" placement="left-start">
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={country}
          onChange={event => setCountry(event.target.value)}
          renderValue={() => <span>{country}</span>}
        >
          {COUNTRIES.map(country => (
            <MenuItem key={country} value={country}>
              {COUNTRY_FULL_NAME[country]}
            </MenuItem>
          ))}
        </Select>
      </Tooltip>
      <Tooltip title="Colored">
        <Switch
          value={colored}
          checked={colored}
          color="default"
          onChange={() => (colored ? setColored(false) : setColored(true))}
        />
      </Tooltip>
    </Actions>
  );
};

export default Header;

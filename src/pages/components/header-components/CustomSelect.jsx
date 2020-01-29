import React from "react";
import { MenuItem, Select } from "@material-ui/core";
import styled from "@emotion/styled";

const StyledSelect = styled(Select)`
  margin-right: 15px;
  font-family: inherit !important;
  &:before {
    content: none !important;
  }
  &:after {
    content: none !important;
  }
  .MuiSelect-select {
    padding-right: 0 !important;
  }
  .MuiSelect-icon {
    visibility: hidden !important;
  }
  .MuiInputBase-input {
    padding: 7px 0 1px;
  }
`;

const CustomSelect = ({ value, setValue, renderFunction, values }) => {
  const isArray = !!values.length;
  const menuItems = isArray ? values : Object.keys(values);

  return (
    <StyledSelect
      MenuProps={{ disableScrollLock: true }}
      value={value}
      onChange={event => setValue(event.target.value)}
      renderValue={renderFunction}
    >
      {menuItems.map(item => (
        <MenuItem key={item} value={item} dense>
          {isArray ? item : values[item]}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default CustomSelect;

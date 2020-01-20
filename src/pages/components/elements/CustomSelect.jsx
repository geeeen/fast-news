import React from "react";
import { MenuItem, Select } from "@material-ui/core";
import styled from "@emotion/styled";

const SelectLabel = styled.span`
  margin: 10px 5px 0 0;
`;

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

const CustomSelect = ({
  label,
  value,
  setValue,
  renderFunction,
  isArray,
  values
}) => {
  const menuItems = isArray ? values : Object.keys(values);

  return (
    <>
      <SelectLabel>{label}:</SelectLabel>
      <StyledSelect
        labelId={`${label}-custom-select-label`}
        id={`${label}-custom-select`}
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
    </>
  );
};

export default CustomSelect;

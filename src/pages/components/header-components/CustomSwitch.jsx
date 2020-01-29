import React from "react";
import styled from "@emotion/styled";
import { Switch } from "@material-ui/core";

const StyledSwitch = styled(Switch)`
  width: 50px !important;
  height: 30px !important;
  padding: 10px !important;
  .MuiSwitch-switchBase {
    padding: 5px;
  }
`;

const CustomSwitch = ({ colored, setColored }) => {
  return (
    <StyledSwitch
      value={colored}
      checked={colored}
      color="default"
      onChange={() => (colored ? setColored(false) : setColored(true))}
    />
  );
};

export default CustomSwitch;

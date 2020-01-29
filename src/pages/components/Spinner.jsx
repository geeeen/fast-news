import React from "react";
import { CircularProgress } from "@material-ui/core";
import styled from "@emotion/styled";

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  padding: ${props => props.padding + "px"};
  ${props => props.posAbsolute ? 
  `
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 99999;
    box-sizing: border-box;
    background: #00eeff30;
    ` : ""
  }
`;

const spinner = ({ size = 40, padding = 0, posAbsolute = false }) => {
  return (
    <StyledSpinner padding={padding} posAbsolute={posAbsolute}>
      <CircularProgress
        color={"primary"}
        size={size}
        thickness={Math.sqrt(size) - Math.sqrt(size) / 2}
      />
    </StyledSpinner>
  );
};

export default spinner;

import React from "react";
import { CircularProgress } from "@material-ui/core";
import styled from "@emotion/styled";

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  margin: ${props => props.margin + "px"};
`;

const Spinner = ({ size = 40, margin = 0 }) => {
  return (
    <StyledSpinner margin={margin}>
      <CircularProgress
        color={"primary"}
        size={size}
        thickness={Math.sqrt(size) - Math.sqrt(size) / 2}
      />
    </StyledSpinner>
  );
};

export default Spinner;

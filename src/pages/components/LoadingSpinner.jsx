import React from "react";
import { CircularProgress } from "@material-ui/core";
import styled from "@emotion/styled";

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

const LoadingSpinner = ({ size = 40 }) => {
  return (
    <StyledSpinner>
      <CircularProgress
        color={"inherit"}
        size={size}
        thickness={Math.sqrt(size) - Math.sqrt(size) / 2}
      />
    </StyledSpinner>
  );
};

export default LoadingSpinner;

import React from "react";
import styled from "@emotion/styled";
import catImage from "../../resources/cat.png";

const StyledError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 600px;
  & img {
    width: 150px;
  }
  & span {
    margin-top: 20px;
    font-size: 30px;
  }
`;

const error = ({ error }) => {
  return (
    <StyledError>
      <img src={catImage} alt={"Empty"} />
      <span>{error}</span>
    </StyledError>
  );
};

export default error;

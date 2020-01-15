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
    filter: ${props =>
      props.colored
        ? "grayscale(0)"
        : "grayscale(1) opacity(0.8) contrast(1.5)"};
  }
  & span {
    margin-top: 20px;
    font-size: 30px;
  }
`;

const Error = ({ error, colored }) => {
  return (
    <StyledError colored={colored}>
      <img src={catImage} alt={"Empty"} />
      <span>{error}</span>
    </StyledError>
  );
};

export default Error;

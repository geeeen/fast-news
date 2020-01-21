import React from "react";
import styled from "@emotion/styled";
import Link from "@material-ui/core/Link";
import nf from "../resources/nf.png";

const ErrorPage = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 300px;
  max-height: 500px;
`;

const StyledLink = styled(Link)`
  font-size: 25px;
  margin-top: 30px !important;
`;

const NotFoundPage = () => {
  return (
    <ErrorPage>
      <h1>404 / Page Not Found!</h1>
      <img src={nf} alt={"Not Found"} />
      <StyledLink href={`/#/`}>Go to Main Page</StyledLink>
    </ErrorPage>
  );
};

export default NotFoundPage;

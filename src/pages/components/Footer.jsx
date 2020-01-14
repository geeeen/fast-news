import React from "react";
import styled from "@emotion/styled";

const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 30px;
  padding: 0 10px;
  border-bottom: 1px solid;
`;

const Link = styled.a`
  margin-left: 5px;
  color: black;
  text-decoration: unset;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <StyledFooter>
      Powered by<Link href={"https://newsapi.org/"}>NewsAPI</Link>
    </StyledFooter>
  );
};

export default Footer;

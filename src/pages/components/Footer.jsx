import React from "react";
import styled from "@emotion/styled";

const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 30px;
  padding: 0 10px;
  border-top: 1px solid;
  border-bottom: 1px solid;
`;

const Link = styled.a`
  margin-left: 5px;
  color: black;
  font-weight: bold;
  text-decoration: unset;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <StyledFooter>
      Used With<Link href={"https://newsapi.org/"}>NewsAPI</Link>
    </StyledFooter>
  );
};

export default Footer;

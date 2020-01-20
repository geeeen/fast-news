import React from "react";
import { CATEGORIES } from "../../../constants";
import styled from "@emotion/styled";

const StyledCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 420px;
  min-width: 300px;
  @media (max-width: 1100px) {
    justify-content: center;
    padding-bottom: 15px;
  }
`;

const Category = styled.span`
  margin-right: 35px;
  cursor: pointer;
  font-weight: ${props => (props.bold ? "bold" : "")};
  font-size: ${props => (props.bold ? "23px" : "21px")};
`;

const Categories = ({ category, setCategory }) => {
  return (
    <StyledCategories>
      {CATEGORIES.map(ctg => (
        <Category
          key={ctg}
          bold={ctg === category}
          onClick={() => setCategory(ctg)}
        >
          {ctg}
        </Category>
      ))}
    </StyledCategories>
  );
};

export default Categories;

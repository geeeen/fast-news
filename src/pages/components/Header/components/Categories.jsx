import React from "react";
import { CATEGORIES } from "../../../../constants";
import styled from "@emotion/styled";

const StyledCategories = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 480px;
  @media (max-width: 1300px) {
    justify-content: center;
    padding-bottom: 15px;
  }
`;

const Category = styled.span`
  margin-right: 30px;
  cursor: pointer;
  font-weight: ${props => (props.bold ? "bold" : "")};
  font-size: ${props => (props.bold ? "23px" : "21px")};
`;

const Categories = ({ category, setCategory }) => {
  return (
    <StyledCategories>
      {CATEGORIES.map(ctg => (
        <Category
          id={ctg}
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

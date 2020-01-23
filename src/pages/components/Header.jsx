import React from "react";
import { Tooltip } from "@material-ui/core";
import { PAGE_SIZES, COUNTRIES } from "../../constants";
import styled from "@emotion/styled";
import gen from "../../resources/gen.png";
import Spinner from "./Spinner";
import CustomSwitch from "./elements/CustomSwitch";
import CustomSelect from "./elements/CustomSelect";
import Search from "./elements/Search";
import Categories from "./elements/Categories";

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: 1px solid;
  @media (max-width: 1300px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 420px;
  min-width: 300px;
  @media (max-width: 1300px) {
    justify-content: center;
  }
  & img {
    opacity: 0.7;
  }
`;

const HeaderTitle = styled.div`
  text-align: center;
  font-size: 60px;
  margin: 5px;
`;

const DateAndResults = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5px;
  & div {
    font-weight: bold;
  }
  & span {
    margin: 0 5px 0 15px;
  }
`;

const Actions = styled.div`
  display: flex;
`;

const Header = ({
  totalResults,
  category,
  setCategory,
  setSearchString,
  pageSize,
  setPageSize,
  country,
  setCountry,
  colored,
  setColored
}) => {
  return (
    <>
      <HeaderRow>
        <StyledLogo>
          <img
            src={gen}
            alt={"Logo"}
            onClick={() => window.open("https://github.com/geeeen")}
          />
        </StyledLogo>

        <HeaderTitle>{COUNTRIES[country]}</HeaderTitle>

        <Categories category={category} setCategory={setCategory} />
      </HeaderRow>

      <HeaderRow>
        <DateAndResults>
          <div>{new Date().toLocaleDateString(country)}</div>
          <span>Available: </span>
          {totalResults !== undefined ? totalResults : <Spinner size={15} />}
        </DateAndResults>

        <Search setSearchString={setSearchString} />

        <Actions>
          <CustomSelect
            label={"Displayed"}
            value={pageSize}
            setValue={setPageSize}
            renderFunction={undefined}
            isArray={true}
            values={PAGE_SIZES}
          />

          <CustomSelect
            label={"Country"}
            value={country}
            setValue={setCountry}
            renderFunction={() => country}
            isArray={false}
            values={COUNTRIES}
          />

          <Tooltip title="Colored" placement="top">
            <div>
              <CustomSwitch colored={colored} setColored={setColored} />
            </div>
          </Tooltip>
        </Actions>
      </HeaderRow>
    </>
  );
};

export default Header;

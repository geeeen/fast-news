import React, { useRef } from "react";
import {
  Input,
  Select,
  MenuItem,
  Switch,
  Tooltip,
  IconButton
} from "@material-ui/core";
import { PAGE_SIZES, COUNTRIES, CATEGORIES } from "../../constants";
import { SearchRounded, ClearRounded } from "@material-ui/icons";
import styled from "@emotion/styled";
import gen from "../../resources/gen.png";
import ru from "../../resources/ru.png";
import usa from "../../resources/usa.png";
import Spinner from "./Spinner";

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 10px;
  border-bottom: 1px solid;
  @media (max-width: 1100px) {
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
  @media (max-width: 1100px) {
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

const Categories = styled.div`
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

const Search = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  min-width: 300px;
`;

const StyledInput = styled(Input)`
  margin: 2px 5px;
  height: 26px;
  width: 100%;
  padding: 0 15px;
  border: 1px solid #808080;
  border-radius: 5px;
`;

const StyledIconButton = styled(IconButton)`
  padding: 5px 2px !important;
`;

const Actions = styled.div`
  display: flex;
`;

const SelectLabel = styled.span`
  margin: 10px 5px 0 0;
`;

const CustomSelect = styled(Select)`
  margin-right: 15px;
  font-family: inherit !important;
  &:before {
    content: none !important;
  }
  &:after {
    content: none !important;
  }
  .MuiSelect-select {
    padding-right: 0 !important;
  }
  .MuiSelect-icon {
    visibility: hidden !important;
  }
  .MuiInputBase-input {
    padding: 7px 0 1px;
  }
`;

const CustomSwitch = styled(Switch)`
  width: 50px !important;
  height: 30px !important;
  padding: 10px !important;
  .MuiSwitch-switchBase {
    padding: 5px;
  }
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
  const searchInput = useRef(undefined);

  let logo = gen;
  if (country === "ru") {
    logo = ru;
  }
  if (country === "us") {
    logo = usa;
  }

  return (
    <>
      <HeaderRow>
        <StyledLogo>
          <img src={logo} alt={"Logo"} />
        </StyledLogo>
        <HeaderTitle>{COUNTRIES[country]}</HeaderTitle>
        <Categories>
          {CATEGORIES.map(ctg => (
            <Category
              key={ctg}
              bold={ctg === category}
              onClick={() => setCategory(ctg)}
            >
              {ctg}
            </Category>
          ))}
        </Categories>
      </HeaderRow>
      <HeaderRow>
        <DateAndResults>
          <div>{new Date().toLocaleDateString(country)}</div>

          <span>Available: </span>
          {totalResults !== undefined ? (
            totalResults
          ) : (
            <Spinner size={20} margin={5} />
          )}
        </DateAndResults>

        <Search>
          <StyledInput
            inputRef={searchInput}
            disableUnderline
            placeholder="Search..."
            endAdornment={
              <>
                <StyledIconButton
                  aria-label="search"
                  onClick={() => {
                    setSearchString(undefined);
                    searchInput.current.value = "";
                  }}
                >
                  <ClearRounded />
                </StyledIconButton>
                <StyledIconButton
                  aria-label="search"
                  onClick={() => setSearchString(searchInput.current.value)}
                >
                  <SearchRounded />
                </StyledIconButton>
              </>
            }
            onKeyDown={event =>
              event.keyCode === 13
                ? setSearchString(event.target.value)
                : undefined
            }
            onChange={event =>
              event.target.value === "" ? setSearchString(undefined) : undefined
            }
          />
        </Search>

        <Actions>
          <SelectLabel>Displayed:</SelectLabel>
          <CustomSelect
            labelId="count-custom-select-label"
            id="count-custom-select"
            MenuProps={{ disableScrollLock: true }}
            value={pageSize}
            onChange={event => setPageSize(event.target.value)}
          >
            {PAGE_SIZES.map(size => (
              <MenuItem key={size} value={size} dense>
                {size}
              </MenuItem>
            ))}
          </CustomSelect>
          <SelectLabel>Country:</SelectLabel>
          <CustomSelect
            labelId="country-custom-select-label"
            id="country-custom-select"
            MenuProps={{ disableScrollLock: true }}
            value={country}
            onChange={event => setCountry(event.target.value)}
            renderValue={() => country}
          >
            {Object.keys(COUNTRIES).map(country => (
              <MenuItem key={country} value={country} dense>
                {COUNTRIES[country]}
              </MenuItem>
            ))}
          </CustomSelect>
          <Tooltip title="Colored" placement="top">
            <CustomSwitch
              value={colored}
              checked={colored}
              color="default"
              onChange={() => (colored ? setColored(false) : setColored(true))}
            />
          </Tooltip>
        </Actions>
      </HeaderRow>
    </>
  );
};

export default Header;

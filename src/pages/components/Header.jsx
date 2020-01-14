import React, { useRef } from "react";
import {
  Input,
  Select,
  MenuItem,
  Switch,
  Tooltip,
  IconButton
} from "@material-ui/core";
import { PAGE_SIZES, COUNTRIES, COUNTRY_FULL_NAME } from "../../constants";
import { SearchRounded } from "@material-ui/icons";
import styled from "@emotion/styled";

const StyledHeaderTitle = styled.div`
  text-align: center;
  font-size: 60px;
  margin: 5px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 30px;
  padding: 0 10px;
  border-top: 1px solid;
  border-bottom: 1px solid;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const CurrentDate = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5px;
  font-family: inherit !important;
`;

const StyledSearch = styled.div`
  display: flex;
  width: 700px;
  min-width: 300px;
`;

const StyledInput = styled(Input)`
  margin: 2px 5px;
  height: 26px;
  width: 100%;
  border: 1px solid #808080;
  border-radius: 5px;
  input {
    margin-left: 15px;
  }
`;

const StyledIconButton = styled(IconButton)`
  padding: 5px !important;
`;

const Actions = styled.div`
  display: flex;
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
  setSearchString,
  pageSize,
  setPageSize,
  country,
  setCountry,
  colored,
  setColored
}) => {
  const searchInput = useRef(undefined);

  return (
    <>
      <StyledHeaderTitle>{COUNTRY_FULL_NAME[country]}</StyledHeaderTitle>

      <StyledHeader>
        <CurrentDate>{new Date().toLocaleDateString(country)}</CurrentDate>

        <StyledSearch>
          <StyledInput
            inputRef={searchInput}
            disableUnderline
            placeholder="Search..."
            type="search"
            endAdornment={
              <StyledIconButton
                type="submit"
                aria-label="search"
                onClick={() => setSearchString(searchInput.current.value)}
              >
                <SearchRounded />
              </StyledIconButton>
            }
            onKeyDown={event =>
              event.keyCode === 13
                ? setSearchString(event.target.value)
                : undefined
            }
            onChange={event =>
              event.target.value === "" ? setSearchString("") : undefined
            }
          />
        </StyledSearch>

        <Actions>
          <Tooltip title="News Count" placement="left-end">
            <CustomSelect
              labelId="count-custom-select-label"
              id="count-custom-select"
              value={pageSize}
              onChange={event => setPageSize(event.target.value)}
            >
              {PAGE_SIZES.map(size => (
                <MenuItem key={size} value={size} dense>
                  {size}
                </MenuItem>
              ))}
            </CustomSelect>
          </Tooltip>
          <Tooltip title="Country" placement="top">
            <CustomSelect
              labelId="country-custom-select-label"
              id="country-custom-select"
              value={country}
              onChange={event => setCountry(event.target.value)}
              renderValue={() => <span>{country}</span>}
            >
              {COUNTRIES.map(country => (
                <MenuItem key={country} value={country} dense>
                  {COUNTRY_FULL_NAME[country]}
                </MenuItem>
              ))}
            </CustomSelect>
          </Tooltip>
          <Tooltip title="Colored" placement="top">
            <CustomSwitch
              value={colored}
              checked={colored}
              color="default"
              onChange={() => (colored ? setColored(false) : setColored(true))}
            />
          </Tooltip>
        </Actions>
      </StyledHeader>
    </>
  );
};

export default Header;

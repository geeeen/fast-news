import React, { useRef } from "react";
import { ClearRounded, SearchRounded } from "@material-ui/icons";
import styled from "@emotion/styled";
import { IconButton, Input } from "@material-ui/core";

const StyledSearch = styled.div`
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

const Search = ({ setSearchString }) => {
  const searchInput = useRef();

  const clearInput = () => {
    setSearchString("");
    searchInput.current.value = "";
  };

  return (
    <StyledSearch>
      <StyledInput
        id={"input"}
        inputRef={searchInput}
        disableUnderline
        placeholder="Search..."
        onKeyDown={event =>
          event.keyCode === 13 ? setSearchString(event.target.value) : undefined
        }
        onChange={event =>
          event.target.value === "" ? setSearchString("") : undefined
        }
        endAdornment={
          <>
            <StyledIconButton
              id={"clearRounded"}
              aria-label="search"
              onClick={() => clearInput()}
            >
              <ClearRounded />
            </StyledIconButton>
            <StyledIconButton
              id={"searchRounded"}
              aria-label="search"
              onClick={() => setSearchString(searchInput.current.value)}
            >
              <SearchRounded />
            </StyledIconButton>
          </>
        }
      />
    </StyledSearch>
  );
};

export default Search;

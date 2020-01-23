import React from "react";
import MainPage from "./pages/MainPage";
import styled from "@emotion/styled";
import bg from "./resources/bg.png";
import SpecialElite from "./resources/fonts/Special_Elite/Regular.ttf";

const StyledAppBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  background-image: url(${bg});
  opacity: 0.95;
  @font-face {
    font-family: "Special Elite";
    src: url(${SpecialElite});
  }
  font-family: "Special Elite", cursive;
`;

function App() {
  return (
    <StyledAppBackground>
      <MainPage />
    </StyledAppBackground>
  );
}

export default App;

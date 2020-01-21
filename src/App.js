import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import bg from "./resources/bg.png";

const StyledAppBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  background-image: url(${bg});
  opacity: 0.9;
  filter: alpha(opacity=90);
`;

function App() {
  return (
    <StyledAppBackground>
      <Global
        styles={css`
          body {
            margin: 0;
            color: #2d2d2d;
            font-family: "Special Elite", cursive;
          }
        `}
      />
      <HashRouter>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Redirect from="/" to="/" />
        </Switch>
      </HashRouter>
    </StyledAppBackground>
  );
}

export default App;

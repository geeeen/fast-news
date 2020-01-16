import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NonFoundPage";
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
  // background: #dfdfdf;
  // background-image: url("http://api.thumbr.it/whitenoise-100x100.png?background=#dfdfdfff&noise=626262&density=20&opacity=30");
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
      <Router>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/" component={NotFoundPage} />
        </Switch>
      </Router>
    </StyledAppBackground>
  );
}

export default App;

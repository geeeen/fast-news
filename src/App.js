import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NonFoundPage";
import { Global, css } from "@emotion/core";
import bgImage from "./resources/paper.jpg";

function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            background-image: url(${bgImage});
            background-size: cover;
            color: #404040;
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
    </>
  );
}

export default App;

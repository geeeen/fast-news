import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";
import NotFoundPage from "./pages/NonFoundPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact/>
        <Route path="/id=:id(\d+)" component={NewsPage} exact/>
        <Route path="/" component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}

export default App;

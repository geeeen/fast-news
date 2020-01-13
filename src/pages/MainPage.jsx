import React, { useEffect, useState } from "react";
import { getTopNews } from "../services/data-service";
import Header from "./components/Header";
import NewsColumns from "./components/NewsColumns";

const MainPage = () => {
  let lsColored = localStorage.getItem("colored");
  let lsCountry = localStorage.getItem("country");
  const [news, setNews] = useState(undefined);
  const [colored, setColored] = useState(lsColored === "true");
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState(undefined);
  const [country, setCountry] = useState(lsCountry ? lsCountry : "us");

  useEffect(() => {
    console.log(window.clientInformation.languages[1]);
    setNewsLoading(true);
    getTopNews(country)
      .then(value => {
        setNews(value.articles);
        setNewsLoading(false);
      })
      .catch(error => {
        setNewsError(error.toString());
        setNewsLoading(false);
      });
  }, [country]);

  const setColoredWithLocalStorage = colored => {
    localStorage.setItem("colored", colored);
    setColored(colored);
  };

  const setCountryWithLocalStorage = country => {
    localStorage.setItem("country", country);
    setCountry(country);
  };

  return newsLoading ? (
    <div>LOADING...</div>
  ) : newsError ? (
    <div>{newsError}</div>
  ) : (
    <>
      <Header
        country={country}
        setCountry={setCountryWithLocalStorage}
        colored={colored}
        setColored={setColoredWithLocalStorage}
      />
      <NewsColumns news={news} colored={colored} />
    </>
  );
};

export default MainPage;

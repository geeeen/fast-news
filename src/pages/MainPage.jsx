import React, { useEffect, useState } from "react";
import { getTopNews } from "../services/data-service";
import Header from "./components/Header";
import News from "./components/News";
import styled from "@emotion/styled";
import LoadingSpinner from "./components/LoadingSpinner";
import Footer from "./components/Footer";

const StyledMainPage = styled.div`
  margin: 1% 3%;
`;

const MainPage = () => {
  let lsColored = localStorage.getItem("colored");
  let lsCountry = localStorage.getItem("country");
  let lsPageSize = localStorage.getItem("pageSize");
  const [news, setNews] = useState(undefined);
  const [searchString, setSearchString] = useState(undefined);
  const [pageSize, setPageSize] = useState(lsPageSize ? lsPageSize : 20);
  const [colored, setColored] = useState(lsColored === "true");
  const [country, setCountry] = useState(lsCountry ? lsCountry : "us");
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState(undefined);

  useEffect(() => {
    setNewsLoading(true);
    setNewsError(undefined);
    getTopNews(country, pageSize, searchString)
      .then(value => {
        setNews(value.articles);
        setNewsLoading(false);
      })
      .catch(error => {
        setNewsError(error.toString());
        setNewsLoading(false);
      });
  }, [country, pageSize, searchString]);

  const setPageSizeWithLocalStorage = pageSize => {
    localStorage.setItem("pageSize", pageSize);
    setPageSize(pageSize);
  };

  const setColoredWithLocalStorage = colored => {
    localStorage.setItem("colored", colored);
    setColored(colored);
  };

  const setCountryWithLocalStorage = country => {
    localStorage.setItem("country", country);
    setCountry(country);
  };

  return (
    <StyledMainPage>
      <Header
        setSearchString={setSearchString}
        pageSize={pageSize}
        setPageSize={setPageSizeWithLocalStorage}
        country={country}
        setCountry={setCountryWithLocalStorage}
        colored={colored}
        setColored={setColoredWithLocalStorage}
      />
      {newsLoading ? (
        <LoadingSpinner size={150} />
      ) : newsError ? (
        <div>{newsError}</div>
      ) : (
        <News news={news} colored={colored} />
      )}
      <Footer />
    </StyledMainPage>
  );
};

export default MainPage;

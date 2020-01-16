import React, { useEffect, useState } from "react";
import { getTopNews } from "../services/data-service";
import Header from "./components/Header";
import NewsColumns from "./components/NewsColumns";
import styled from "@emotion/styled";
import Footer from "./components/Footer";

const StyledMainPage = styled.div`
  margin: 1% 3%;
`;

const USER_LANG = navigator.language;
const USER_COUNTRY = USER_LANG.replace(/(\w+-)/g, "").toLowerCase();

const MainPage = () => {
  const lsCategory = localStorage.getItem("category");
  const lsPageSize = localStorage.getItem("pageSize");
  const lsColored = localStorage.getItem("colored");
  const lsCountry = localStorage.getItem("country");
  const [news, setNews] = useState(undefined);
  const [totalResults, setTotalResults] = useState(undefined);
  const [searchString, setSearchString] = useState(undefined);
  const [category, setCategory] = useState(lsCategory ? lsCategory : "All");
  const [pageSize, setPageSize] = useState(lsPageSize ? lsPageSize : 20);
  const [colored, setColored] = useState(lsColored === "true");
  const [country, setCountry] = useState(lsCountry ? lsCountry : USER_COUNTRY);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState(undefined);

  useEffect(() => {
    setNewsLoading(true);
    setTotalResults(undefined);
    setNewsError(undefined);
    getTopNews(country, pageSize, searchString, category)
      .then(value => {
        setNews(value.articles);
        setTotalResults(value.totalResults);
        setNewsLoading(false);
      })
      .catch(error => {
        setTotalResults(0);
        if (
          error.response &&
          error.response.data.code === "parametersMissing"
        ) {
          setNewsError("Set Country, Category or Search String");
          setNewsLoading(false);
          return;
        }
        setNewsError(error.toString());
        setNewsLoading(false);
      });
  }, [country, pageSize, searchString, category]);

  // const clearDuplicates = news => {
  //   let newsUrls = [];
  //   return news.filter(el => {
  //     if (!newsUrls.includes(el.url)) {
  //       newsUrls.push(el.url);
  //       return true;
  //     }
  //   })
  // };

  const setCategoryWithLocalStorage = category => {
    localStorage.setItem("category", category);
    setCategory(category);
  };

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
        totalResults={totalResults}
        category={category}
        setCategory={setCategoryWithLocalStorage}
        setSearchString={setSearchString}
        pageSize={pageSize}
        setPageSize={setPageSizeWithLocalStorage}
        country={country}
        setCountry={setCountryWithLocalStorage}
        colored={colored}
        setColored={setColoredWithLocalStorage}
      />
      <NewsColumns
        news={news}
        colored={colored}
        newsLoading={newsLoading}
        newsError={newsError}
      />
      <Footer />
    </StyledMainPage>
  );
};

export default MainPage;

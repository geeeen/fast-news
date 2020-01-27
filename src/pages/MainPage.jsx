import React, { useEffect, useState } from "react";
import { getTopNews } from "../services/data-service";
import Header from "./components/Header";
import NewsColumns from "./components/NewsColumns";
import Footer from "./components/Footer";
import yall from "yall-js";
import styled from "@emotion/styled";
import {
  GET_USER_COUNTRY,
  GET_NAVIGATOR_LANG,
  LS_PARAMS_NAME,
  CUSTOM_ERROR_MESSAGE,
  CUSTOM_ERROR_CODE,
  GET_COLUMN_COUNT
} from "../constants";

export const StyledMainPage = styled.div`
  margin: 1% 3%;
  filter: ${props =>
    props.colored
      ? "grayscale(0)"
      : "grayscale(1) opacity(0.75) contrast(1.2)"};
`;

const MainPage = () => {
  const params = JSON.parse(localStorage.getItem(LS_PARAMS_NAME));
  const [news, setNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState(undefined);
  const [totalResults, setTotalResults] = useState(undefined);
  const [searchString, setSearchString] = useState(undefined);
  const [category, setCategory] = useState(
    params && params.category ? params.category : "General"
  );
  const [pageSize, setPageSize] = useState(
    params && params.pageSize ? params.pageSize : 20
  );
  const [country, setCountry] = useState(
    params && params.country
      ? params.country
      : GET_USER_COUNTRY(GET_NAVIGATOR_LANG())
  );
  const [colored, setColored] = useState(params && params.colored);
  const [columnCount, setColumnCount] = useState(GET_COLUMN_COUNT());

  useEffect(() => {
    setNewsLoading(true);
    setTotalResults(undefined);
    setNewsError(undefined);
    getTopNews(pageSize, country, searchString, category)
      .then(({ articles, totalResults }) => {
        setNews(articles);
        setTotalResults(totalResults);
        setNewsLoading(false);
      })
      .catch(error => {
        if (error.response && error.response.data.code === CUSTOM_ERROR_CODE) {
          setNewsError(CUSTOM_ERROR_MESSAGE);
        } else {
          setNewsError(error.toString());
        }
        setTotalResults(0);
        setNewsLoading(false);
        setNews([]);
      });
  }, [country, pageSize, searchString, category]);

  useEffect(() => {
    document.addEventListener(
      "DOMContentLoaded",
      yall({
        observeChanges: true
      })
    );
  }, []);

  window.addEventListener("unload", () => {
    localStorage.setItem(
      LS_PARAMS_NAME,
      JSON.stringify({
        category: category,
        pageSize: pageSize,
        country: country,
        colored: colored
      })
    );
  });

  window.addEventListener("resize", () => {
    setColumnCount(GET_COLUMN_COUNT());
  });

  return (
    <StyledMainPage colored={colored}>
      <Header
        totalResults={totalResults}
        setSearchString={setSearchString}
        category={category}
        setCategory={setCategory}
        pageSize={pageSize}
        setPageSize={setPageSize}
        country={country}
        setCountry={setCountry}
        colored={colored}
        setColored={setColored}
      />
      <NewsColumns
        news={news}
        newsLoading={newsLoading}
        newsError={newsError}
        columnCount={columnCount}
      />
      <Footer />
    </StyledMainPage>
  );
};

export default MainPage;

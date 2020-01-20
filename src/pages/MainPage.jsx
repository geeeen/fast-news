import React, { useEffect, useState } from "react";
import { getTopNews } from "../services/data-service";
import Header from "./components/Header";
import NewsColumns from "./components/NewsColumns";
import styled from "@emotion/styled";
import Footer from "./components/Footer";
import {
  LOCAL_STORAGE_CATEGORY_NAME,
  LOCAL_STORAGE_COLORED_NAME,
  LOCAL_STORAGE_COUNTRY_NAME,
  LOCAL_STORAGE_PAGE_SIZE_NAME,
  USER_COUNTRY
} from "../constants";

const StyledMainPage = styled.div`
  margin: 1% 3%;
`;

const MainPage = () => {
  const lsCategory = localStorage.getItem(LOCAL_STORAGE_CATEGORY_NAME);
  const lsPageSize = localStorage.getItem(LOCAL_STORAGE_PAGE_SIZE_NAME);
  const lsCountry = localStorage.getItem(LOCAL_STORAGE_COUNTRY_NAME);
  const lsColored = localStorage.getItem(LOCAL_STORAGE_COLORED_NAME);
  const [news, setNews] = useState(undefined);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState(undefined);
  const [totalResults, setTotalResults] = useState(undefined);
  const [searchString, setSearchString] = useState(undefined);
  const [category, setCategory] = useState(lsCategory ? lsCategory : "All");
  const [pageSize, setPageSize] = useState(lsPageSize ? lsPageSize : 20);
  const [country, setCountry] = useState(lsCountry ? lsCountry : USER_COUNTRY);
  const [colored, setColored] = useState(lsColored === "true");

  useEffect(() => {
    setNewsLoading(true);
    setTotalResults(undefined);
    setNewsError(undefined);
    getTopNews(pageSize, country, searchString, category)
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
        } else {
          setNewsError(error.toString());
        }
        setNewsLoading(false);
      });
  }, [country, pageSize, searchString, category]);

  const setStateWithLocalStorage = (name, value, setValueFunc) => {
    localStorage.setItem(name, value);
    setValueFunc(value);
  };

  return (
    <StyledMainPage>
      <Header
        totalResults={totalResults}
        setSearchString={setSearchString}
        category={category}
        setCategory={category =>
          setStateWithLocalStorage(
            LOCAL_STORAGE_CATEGORY_NAME,
            category,
            setCategory
          )
        }
        pageSize={pageSize}
        setPageSize={pageSize =>
          setStateWithLocalStorage(
            LOCAL_STORAGE_PAGE_SIZE_NAME,
            pageSize,
            setPageSize
          )
        }
        country={country}
        setCountry={country =>
          setStateWithLocalStorage(
            LOCAL_STORAGE_COUNTRY_NAME,
            country,
            setCountry
          )
        }
        colored={colored}
        setColored={colored =>
          setStateWithLocalStorage(
            LOCAL_STORAGE_COLORED_NAME,
            colored,
            setColored
          )
        }
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

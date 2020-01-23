import React from "react";
import styled from "@emotion/styled";
import slothImage from "../../resources/sloth.png";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";
import Error from "./Error";

const Columns = styled.div`
  display: flex;
  > div {
    border-left: 1px solid;
  }
  > div:first-of-type,
  > div:empty {
    border-left: none;
  }
`;

const Column = styled.div`
  display: grid;
  width: auto;
  > div {
    border-bottom: 1px solid;
  }
  > div:last-child {
    border-bottom: none;
  }
`;

const EmptyNews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 600px;
  & img {
    width: 150px;
  }
  & span {
    margin-top: 20px;
    font-size: 30px;
  }
`;

const COLUMN_COUNT = Math.round(window.innerWidth / 400);

const NewsColumns = ({ news, newsLoading, newsError }) => {
  const columns = () => {
    let arr = [];
    for (let i = 0; i < COLUMN_COUNT; i++) {
      arr.push(i);
    }
    return arr;
  };

  const getNewsForColumn = columnNumber => {
    if (columnNumber === COLUMN_COUNT) return [];
    let lastColumnNews = news[columnNumber];
    let newsNumber = columnNumber + COLUMN_COUNT;
    let resultArr = [];
    while (lastColumnNews) {
      resultArr.push(lastColumnNews);
      lastColumnNews = news[newsNumber];
      newsNumber += COLUMN_COUNT;
    }
    return resultArr;
  };

  return newsLoading ? (
    <Spinner size={150} margin={50} />
  ) : newsError ? (
    <Error error={newsError} />
  ) : news.length > 0 ? (
    <Columns>
      {columns().map(column => (
        <Column key={column}>
          {getNewsForColumn(column).map(news => (
            <NewsCard key={news.url} news={news} />
          ))}
        </Column>
      ))}
    </Columns>
  ) : (
    <EmptyNews>
      <img src={slothImage} alt={"Empty"} />
      <span>News Not Found</span>
    </EmptyNews>
  );
};

export default NewsColumns;

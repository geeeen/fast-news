import React from "react";
import styled from "@emotion/styled";
import slothImage from "../../resources/sloth.png";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";
import Error from "./Error";

const Columns = styled.div`
  display: flex;
`;

const Column = styled.div`
  border-right: ${props => (props.rightBorder ? "1px solid" : "")};
  display: grid;
  width: auto;
`;

const EmptyNews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 600px;
  & img {
    width: 150px;
    filter: ${props =>
      props.colored
        ? "grayscale(0)"
        : "grayscale(1) opacity(0.8) contrast(1.5)"};
  }
  & span {
    margin-top: 20px;
    font-size: 30px;
  }
`;

const COLUMN_COUNT = Math.round(window.innerWidth / 400);

const NewsColumns = ({ news, colored, newsLoading, newsError }) => {
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
    <Error error={newsError} colored={colored} />
  ) : news.length > 0 ? (
    <Columns>
      {columns().map(column => (
        <Column
          key={column}
          rightBorder={getNewsForColumn(column + 1).length !== 0}
        >
          {getNewsForColumn(column).map(news => (
            <NewsCard key={news.url} news={news} colored={colored} />
          ))}
        </Column>
      ))}
    </Columns>
  ) : (
    <EmptyNews colored={colored}>
      <img src={slothImage} alt={"Empty"} />
      <span>News Not Found</span>
    </EmptyNews>
  );
};

export default NewsColumns;

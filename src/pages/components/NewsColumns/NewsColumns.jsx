import React from "react";
import styled from "@emotion/styled";
import slothImage from "../../../resources/sloth.png";
import NewsCard from "../NewsCard";
import Spinner from "../Spinner";
import Error from "../Error";

const RelativeDiv = styled.div`
  position: relative;
`;

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

const NewsColumns = ({ news, newsLoading, newsError, columnCount }) => {
  const columns = () => {
    return Array.from({ length: columnCount }, (v, i) => i);
  };

  const getNewsForColumn = columnNumber => {
    let resultArr = [];
    let newsNumber = columnNumber;
    while (newsNumber < news.length) {
      resultArr.push(news[newsNumber]);
      newsNumber += columnCount;
    }
    return resultArr;
  };

  return newsError ? (
    <Error error={newsError} />
  ) : news && news.length > 0 ? (
    <RelativeDiv>
      {newsLoading && <Spinner size={150} padding={150} posAbsolute={true} />}
      <Columns>
        {columns().map(column => (
          <Column key={column}>
            {getNewsForColumn(column).map(news => (
              <NewsCard key={news.url} news={news} />
            ))}
          </Column>
        ))}
      </Columns>
    </RelativeDiv>
  ) : newsLoading ? (
    <Spinner size={150} padding={100} />
  ) : (
    <EmptyNews>
      <img src={slothImage} alt={"Empty"} />
      <span>News Not Found</span>
    </EmptyNews>
  );
};

export default NewsColumns;

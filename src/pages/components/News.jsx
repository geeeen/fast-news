import React from "react";
import styled from "@emotion/styled";

const Columns = styled.div`
  display: flex;
`;

const Column = styled.div`
  border-right: ${props => (props.last ? "" : "1px solid")};
  display: grid;
  width: auto;
`;

const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid;
  padding: 5px;
`;

const StyledImg = styled.img`
  max-width: 100% !important;
  cursor: pointer;
  filter: ${props =>
    props.colored ? "grayscale(0)" : "grayscale(1) opacity(0.7) contrast(1.5)"};
`;

const StyledTitle = styled.h2`
  cursor: pointer;
`;

const StyledDescription = styled.span`
  text-align: justify;
`;

const StyledCaption = styled.h4`
  align-self: flex-end;
  margin-top: 15px;
  margin-right: 10px;
`;

const COLUMN_COUNT = Math.round(window.innerWidth / 400);

const News = ({ news, colored }) => {
  const columns = () => {
    let arr = [];
    for (let i = 0; i < COLUMN_COUNT; i++) {
      arr.push(i);
    }
    return arr;
  };

  const getNewsForColumn = columnNumber => {
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

  const removeSourceFromTitle = title => {
    return title.replace(/(\s-\s[^-]+$)/g, "");
  };

  return (
    <Columns>
      {columns().map(column => (
        <Column key={column} last={column === COLUMN_COUNT - 1}>
          {getNewsForColumn(column).map(news => (
            <NewsCard key={news.url}>
              {news.urlToImage && (
                <StyledImg
                  src={news.urlToImage}
                  alt={news.title}
                  colored={colored}
                  onClick={() => window.open(news.url)}
                />
              )}
              <StyledTitle onClick={() => window.open(news.url)}>
                {removeSourceFromTitle(news.title)}
              </StyledTitle>
              <StyledDescription>{news.description}</StyledDescription>
              <StyledCaption>{news.source.name}</StyledCaption>
            </NewsCard>
          ))}
        </Column>
      ))}
    </Columns>
  );
};

export default News;

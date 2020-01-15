import React from "react";
import styled from "@emotion/styled";
import { Tooltip } from "@material-ui/core";
import copy from "copy-to-clipboard";
import { FileCopy } from "@material-ui/icons";
import newspaperImage from "../../resources/newspaper.jpg";
import slothImage from "../../resources/sloth.png";

const Columns = styled.div`
  display: flex;
`;

const Column = styled.div`
  border-right: ${props => (props.rightBorder ? "1px solid" : "")};
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
  box-shadow: 0 0 8px 5px rgba(160, 150, 141, 0.8);
  filter: ${props =>
    props.colored ? "grayscale(0)" : "grayscale(1) opacity(0.8) contrast(1.5)"};
`;

const Title = styled.h2`
  margin: 10px 0;
  cursor: pointer;
`;

const Description = styled.span`
  text-align: justify;
`;

const PublishedTime = styled.span`
  align-self: flex-end;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
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

const News = ({ news, colored, country }) => {
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

  const removeSourceFromTitle = title => {
    return title.replace(/(\s-\s[^-]+$)/g, "");
  };

  const setDefaultImage = event => {
    event.currentTarget.src = newspaperImage;
  };

  const getPublishedDate = date => {
    const pDate = new Date(Date.parse(date));
    return (
      pDate.getDate() +
      "." +
      pDate.getMonth() +
      1 +
      " " +
      pDate.getHours() +
      ":" +
      pDate.getMinutes().toLocaleString(country)
    );
  };

  return news.length > 0 ? (
    <Columns>
      {columns().map(column => (
        <Column
          key={column}
          rightBorder={getNewsForColumn(column + 1).length !== 0}
        >
          {getNewsForColumn(column).map(news => (
            <NewsCard key={news.url}>
              {news.urlToImage && (
                <StyledImg
                  src={news.urlToImage}
                  onError={setDefaultImage}
                  alt={news.title}
                  colored={colored}
                  onClick={() => window.open(news.url)}
                />
              )}
              <Title onClick={() => window.open(news.url)}>
                {removeSourceFromTitle(news.title)}
              </Title>
              <Description>{news.description}</Description>
              {/*<PublishedTime>*/}
              {/*  {getPublishedDate(news.publishedAt)}*/}
              {/*</PublishedTime>*/}
              <CardFooter>
                <Tooltip title="Copy URL" placement="top-start">
                  <FileCopy
                    visibility={"hidden"}
                    onClick={() => copy(news.url)}
                  />
                </Tooltip>
                <h4>{news.source.name}</h4>
              </CardFooter>
            </NewsCard>
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

export default News;

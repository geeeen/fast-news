import React from "react";
import styled from "@emotion/styled";
import { Tooltip } from "@material-ui/core";
import { FileCopy } from "@material-ui/icons";
import copy from "copy-to-clipboard";
import newspaperImage from "../../resources/newspaper.jpg";
import noise from "../../resources/350-50-30.png";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid;
  padding: 5px;
  word-break: break-word;
`;

const RelativeDiv = styled.div`
  position: relative;
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 700px;
  min-width: 200px;
  filter: ${props =>
    props.colored
      ? "grayscale(0)"
      : "grayscale(1) opacity(0.75) contrast(1.2)"};
`;

const ImgFilter = styled.img`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 98%;
`;

const Title = styled.h2`
  margin: 10px 0;
  cursor: pointer;
  color: ${props => (props.colored ? "#00265a" : "")};
`;

const Description = styled.span`
  text-align: justify;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

const NewsCard = ({ news, colored }) => {
  const removeSourceFromTitle = title => {
    return title.replace(/(\s-\s[^-]+$)/g, "");
  };

  const setDefaultImage = event => {
    event.currentTarget.src = newspaperImage;
  };

  return (
    <Card key={news.url}>
      {news.urlToImage && (
        <RelativeDiv>
          <StyledImg
            src={news.urlToImage}
            onError={setDefaultImage}
            alt={news.title}
            colored={colored}
          />
          <ImgFilter src={noise} onClick={() => window.open(news.url)} />
        </RelativeDiv>
      )}
      <Title colored={colored} onClick={() => window.open(news.url)}>
        {removeSourceFromTitle(news.title)}
      </Title>
      <Description>{news.description}</Description>
      <CardFooter>
        <Tooltip title="Copy URL" placement="top-start">
          <FileCopy visibility={"hidden"} onClick={() => copy(news.url)} />
        </Tooltip>
        <h4>{news.source.name}</h4>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;

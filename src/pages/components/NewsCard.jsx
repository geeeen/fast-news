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
`;

const ImgFilter = styled.img`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 98%;
`;

const Title = styled.a`
  margin: 10px 0;
  text-decoration: unset;
  font-weight: bold;
  font-size: 24px;
  color: #00265a;
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

const NewsCard = ({ news }) => {
  const removeSourceFromTitle = title => {
    return title.replace(/(\s-\s[^-]+$)/g, "");
  };

  const setDefaultImage = event => {
    event.currentTarget.src = newspaperImage;
  };

  const { url, urlToImage: image, title, description, source } = news;
  return (
    <Card key={url}>
      {image && (
        <RelativeDiv>
          <StyledImg src={image} onError={setDefaultImage} alt={title} />
          <a href={url} target={"_blank"}>
            <ImgFilter src={noise} />
          </a>
        </RelativeDiv>
      )}
      <Title href={url} target="_blank">
        {removeSourceFromTitle(title)}
      </Title>
      <Description>{description}</Description>
      <CardFooter>
        <Tooltip title="Copy URL" placement="top-start">
          <FileCopy visibility={"hidden"} onClick={() => copy(url)} />
        </Tooltip>
        <h4>{source.name}</h4>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;

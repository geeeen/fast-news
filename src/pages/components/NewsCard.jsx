import React from "react";
import styled from "@emotion/styled";
import newspaperImage from "../../resources/newspaper.jpg";
import noise from "../../resources/350-50-30.png";
import spinner from "../../resources/spinner.gif";
import yall from "yall-js";

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
  max-width: 600px;
  min-width: 250px;
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
  margin: 5px 0;
  text-decoration: unset;
  font-weight: bold;
  font-size: 24px;
  color: #00265a;
`;

const Description = styled.span`
  text-align: justify;
`;

const Source = styled.h4`
  display: flex;
  justify-content: flex-end;
  width: 90%;
`;

document.addEventListener("DOMContentLoaded", function() {
  yall({
    observeChanges: true
  });
});

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
          <a href={url} target={"_blank"}>
            <StyledImg
              className={"lazy"}
              src={spinner}
              data-src={image}
              onError={setDefaultImage}
              alt={title}
            />
            <ImgFilter src={noise} />
          </a>
        </RelativeDiv>
      )}
      <Title href={url} target="_blank">
        {removeSourceFromTitle(title)}
      </Title>
      <Description>{description}</Description>
      <Source>{source.name}</Source>
    </Card>
  );
};

export default NewsCard;

import React from "react";
import { mount, shallow } from "enzyme";
import NewsCard from "../../../pages/components/NewsCard/NewsCard";

describe("Shallow renders NewsCard", () => {
  it("Render", () => {
    shallow(
      <NewsCard
        news={{
          url: "https://some_url",
          urlToImage: "https://some_img_url",
          title: "test title",
          description: "test description",
          source: { name: "SourceName" }
        }}
      />
    );
  });

  it("onError image", () => {
    const newsCard = mount(
      <NewsCard
        news={{
          url: "https://some_url",
          urlToImage: "https://some_img_url",
          title: "test title",
          description: "test description",
          source: { name: "SourceName" }
        }}
      />
    );

    newsCard
      .find("#cardImage")
      .first()
      .simulate("error");
  });
});

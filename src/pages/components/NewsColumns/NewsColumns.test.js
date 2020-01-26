import { shallow } from "enzyme";
import React from "react";
import NewsColumns from "./NewsColumns";

describe("Shallow renders NewsColumns", () => {
  it("Render", () => {
    shallow(<NewsColumns newsError={true} />);

    shallow(
      <NewsColumns
        newsError={false}
        newsLoading={true}
        news={[{ url: "https://first_url" }, { url: "https://second_url" }]}
        columnCount={5}
      />
    );

    shallow(
      <NewsColumns
        newsError={false}
        newsLoading={false}
        news={[]}
        columnCount={5}
      />
    );

    shallow(
      <NewsColumns
        newsError={false}
        newsLoading={true}
        news={[]}
        columnCount={5}
      />
    );
  });
});

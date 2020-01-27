import React from "react";
import { mount, shallow } from "enzyme";
import Header from "../../../pages/components/Header/Header";

describe("Shallow renders Header", () => {
  it("Render", () => {
    shallow(<Header totalResults={15} />);
  });

  it("renderFunction for Select", () => {
    const mockFunc = jest.fn();
    const header = mount(
      <Header pageSize={10} country={"all"} renderFunction={mockFunc} />
    );
    const renderFunction = header
      .find("#countryCustomSelect")
      .first()
      .prop("renderFunction");
    expect(renderFunction).toBeDefined();
  });
});

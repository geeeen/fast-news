import React from "react";
import { mount, shallow } from "enzyme";
import Categories from "../../../../pages/components/header-components/Categories";
import { CATEGORIES } from "../../../../constants";
import { matchers } from "jest-emotion";

expect.extend(matchers);

describe("Shallow renders Categories", () => {
  it("Render", () => {
    shallow(<Categories />);
  });

  it("setCategory function", () => {
    const mockFunc = jest.fn();
    const categories = mount(
      <Categories category={CATEGORIES[0]} setCategory={mockFunc} />
    );
    const categoryNodes = categories.find("Styled(span)");
    categoryNodes.first().simulate("click");

    const categoriesValues = categoryNodes.map(node => node.text());

    expect(mockFunc).toBeCalledWith(CATEGORIES[0]);
    expect(categoriesValues).toEqual(CATEGORIES);
  });

  it("Css properties", () => {
    //emotion toHaveStyleRule doesn't support shallow rendering
    const categories = mount(<Categories category={CATEGORIES[0]} />);

    expect(categories.find("Styled(span)").first()).toHaveStyleRule(
      "font-weight",
      "bold"
    );
  });
});

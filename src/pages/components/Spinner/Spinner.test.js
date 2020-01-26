import { mount, shallow } from "enzyme";
import React from "react";
import Spinner from "./Spinner";
import { matchers } from "jest-emotion";
expect.extend(matchers);

describe("Shallow renders Spinner", () => {
  it("Render", () => {
    shallow(<Spinner />);
  });

  it("Css properties", () => {
    //emotion toHaveStyleRule doesn't support shallow rendering
    const spinner = mount(<Spinner padding={10} posAbsolute={true} />);

    expect(spinner).toHaveStyleRule("padding", "10px");
    expect(spinner).toHaveStyleRule("position", "absolute");
  });
});

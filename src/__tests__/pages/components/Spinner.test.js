import React from "react";
import { mount, shallow } from "enzyme";
import Spinner from "../../../pages/components/Spinner";
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

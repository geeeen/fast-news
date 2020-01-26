import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { GET_USER_COUNTRY } from "./constants";

describe("Shallow renders", () => {
  it("Render", () => {
    shallow(<App />);
  });

  it("Constants file", () => {
    expect(GET_USER_COUNTRY()).toEqual("us");
    expect(GET_USER_COUNTRY("Ru-ru")).toEqual("ru");
  });
});

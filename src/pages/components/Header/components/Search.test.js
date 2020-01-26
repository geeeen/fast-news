import { shallow, mount } from "enzyme";
import React from "react";
import Search from "./Search";

describe("Shallow renders Search", () => {
  it("Render", () => {
    shallow(<Search />);
  });

  it("setSearchString input component", () => {
    const value = "SomeValue";
    const mockFunc = jest.fn();
    const shallowSearch = shallow(<Search setSearchString={mockFunc} />);
    const input = shallowSearch.find("#input");
    input.simulate("change", { target: { value: "" } });
    input.simulate("keydown", { keyCode: 13, target: { value } });
    //should do nothing
    input.simulate("change", { target: { value } });
    input.simulate("keydown", { keyCode: 15, target: { value } });

    expect(mockFunc.mock.calls[0][0]).toBe(undefined);
    expect(mockFunc.mock.calls[1][0]).toBe(value);
    expect(mockFunc.mock.calls.length).toBe(2);
  });

  it("setSearchString button components", () => {
    const mockFunc = jest.fn();
    const mountSearch = mount(<Search setSearchString={mockFunc} />);
    mountSearch
      .find("#clearRounded")
      .first()
      .simulate("click");
    mountSearch
      .find("#searchRounded")
      .first()
      .simulate("click");

    expect(mockFunc.mock.calls[0][0]).toBe(undefined);
    expect(mockFunc.mock.calls[1][0]).toBe("");
  });
});

import { shallow } from "enzyme";
import React from "react";
import CustomSwitch from "./CustomSwitch";

describe("Shallow renders CustomSwitch", () => {
  it("Render", () => {
    shallow(<CustomSwitch />);
  });

  it("setColored function", () => {
    const mockFunc = jest.fn();
    const trueSwitch = shallow(
      <CustomSwitch colored={true} setColored={mockFunc} />
    );
    const falseSwitch = shallow(
      <CustomSwitch colored={false} setColored={mockFunc} />
    );
    trueSwitch.simulate("change");
    falseSwitch.simulate("change");

    expect(mockFunc.mock.calls[0][0]).toBe(false);
    expect(mockFunc.mock.calls[1][0]).toBe(true);
  });
});

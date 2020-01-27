import React from "react";
import CustomSelect from "../../../../pages/components/Header/components/CustomSelect";
import { shallow } from "enzyme";
import { COUNTRIES, PAGE_SIZES } from "../../../../constants";

describe("Shallow renders CustomSelect", () => {
  it("Render select with array values", () => {
    const select = shallow(<CustomSelect values={PAGE_SIZES} />);
    expect(select.text()).toEqual(PAGE_SIZES.join(""));
  });

  it("Render select width object values", () => {
    const select = shallow(<CustomSelect values={COUNTRIES} />);
    expect(select.text()).toEqual(Object.values(COUNTRIES).join(""));
  });

  it("setValue function", () => {
    const value = 10;
    const mockFunc = jest.fn();
    const select = shallow(
      <CustomSelect values={PAGE_SIZES} setValue={mockFunc} />
    );
    select.simulate("change", { target: { value } });

    expect(mockFunc).toBeCalledWith(value);
  });
});

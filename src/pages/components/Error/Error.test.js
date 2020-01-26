import { shallow } from "enzyme";
import React from "react";
import Error from "./Error";

it("Shallow renders Error", () => {
  shallow(<Error />);
});

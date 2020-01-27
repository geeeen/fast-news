import React from "react";
import { shallow } from "enzyme";
import Error from "../../../pages/components/Error";

it("Shallow renders Error", () => {
  shallow(<Error />);
});

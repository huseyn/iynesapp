import React from "react";
import { shallow } from "enzyme";
import Content from "./Content";

describe("<Content/>", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Content />)));

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});

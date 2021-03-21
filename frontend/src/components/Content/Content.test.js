import React from "react";
import { shallow } from "enzyme";
import Content from "./Content";
import Header from "../Header";

describe("<Content/>", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Content />)));

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should contains a Header component", () => {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });
});

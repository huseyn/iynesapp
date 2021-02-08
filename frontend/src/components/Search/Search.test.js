import React from "react";
import { shallow } from "enzyme";
import Search from "./Search";
import Input from "../Input";

describe("<Search/>", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Search />)));

  it("should render a <div/>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should contains an Input component", () => {
    expect(wrapper.containsMatchingElement(<Input />)).toEqual(true);
  });
});

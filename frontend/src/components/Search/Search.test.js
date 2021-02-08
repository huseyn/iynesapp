import React from "react";
import { shallow } from "enzyme";
import Search from "./Search";

describe("<Search/>", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Search />)));

  it("should render a <div/>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});

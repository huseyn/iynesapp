import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("<Header/>", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Header />)));

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});

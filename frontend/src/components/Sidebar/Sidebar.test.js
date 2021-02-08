import React from "react";
import { shallow } from "enzyme";
import Sidebar from "./Sidebar";

describe("<Sidebar/>", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Sidebar />)));

  it("should render a <div/>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});

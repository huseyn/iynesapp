import React from "react";
import { shallow } from "enzyme";
import HomePage from "./HomePage";
import Sidebar from "../../components/Sidebar";

describe("<HomePage/>", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<HomePage />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should render a <div/>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should contains Sidebar component", () => {
    expect(wrapper.containsMatchingElement(<Sidebar />)).toEqual(true);
  });
});

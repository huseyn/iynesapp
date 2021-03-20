import React from "react";
import { shallow } from "enzyme";
import Sidebar from "./Sidebar";
import Search from "../Search";
import MessageList from "../MessageList";

describe("<Sidebar/>", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Sidebar />)));

  it("should render a <div/>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should contains Search component", () => {
    expect(wrapper.containsMatchingElement(<Search />)).toEqual(true);
  });

  it("should contains MessageList component", () => {
    expect(wrapper.containsMatchingElement(<MessageList />)).toEqual(true);
  });
});

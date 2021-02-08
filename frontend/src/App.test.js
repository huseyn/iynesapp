import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import HomePage from "./pages/HomePage";

describe("<App/>", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render correctly", () => expect(wrapper).toMatchSnapshot());

  it("should render a <div/>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should contains HomePage component", () => {
    expect(wrapper.containsMatchingElement(<HomePage />)).toEqual(true);
  });
});

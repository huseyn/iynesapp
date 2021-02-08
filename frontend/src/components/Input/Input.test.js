import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";

describe("<Input/>", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Input />)));

  it("should render a <input />", () => {
    expect(wrapper.find("input").length).toEqual(1);
  });
});

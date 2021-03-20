import React from "react";
import { shallow } from "enzyme";
import MessageItem from "./MessageItem";

describe("<MessageItem/>", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<MessageItem message={{}} />)));

  it("should render a li", () => {

    expect(wrapper.find("li").length).toEqual(1);
  });
});

import React from "react";
import { shallow } from "enzyme";
import MessageList from "./MessageList";
describe("<MessageList/>", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<MessageList />)));

  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render an instance of the MessageItem component", () => {
    const messages = [{}, {}, {}];
    wrapper.setState({ messages });

    expect(wrapper.find("MessageItem").length).toEqual(messages.length);
  });
});

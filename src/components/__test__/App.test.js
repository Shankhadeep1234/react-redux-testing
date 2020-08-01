import React from "react";
import { shallow } from "enzyme";

import CommentBox from "../CommentBox";

import App from "../App";

it("shows a comment box", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(CommentBox).length).toEqual(1);
});

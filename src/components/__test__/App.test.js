import React from "react";
import { shallow } from "enzyme";

import App from "components/App";
import CommentList from "components/CommentList";
import CommentBox from "components/CommentBox";

it("shows a comment box", () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentList).length).toEqual(1);
});

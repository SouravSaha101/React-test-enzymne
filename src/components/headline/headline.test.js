import Header from "./index";
import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../utils/index";

const setUp = (props = {}) => {
  const comp = shallow(<Header {...props} />);
  return comp;
};
describe("Headline Component", () => {
  describe("have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setUp(props);
    });
    it("should render withour errors", () => {
      const component = findByTestAttr(wrapper, "HeaderComponent");
      expect(component.length).toBe(1);
    });
    it("should render a h1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });
    it("should render a desc", () => {
      const desc = findByTestAttr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });
  describe("have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("should render withour errors", () => {
      const component = findByTestAttr(wrapper, "HeaderComponent");
      expect(component.length).toBe(0);
    });
    it("should render a h1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(0);
    });
    it("should render a desc", () => {
      const desc = findByTestAttr(wrapper, "desc");
      expect(desc.length).toBe(0);
    });
  });
});

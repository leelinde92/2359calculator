/**
 * @jest-environment jsdom
 */
import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import { createStore } from "redux";

import App from "../App";
import Button from "../src/components/Button";
import calculatorReducer from "../src/providers/redux/reducer";

describe("UI tests", () => {
  const mockStore = createStore(calculatorReducer);
  const wrapper = mount(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );

  describe("Buttons", () => {
    it("1", () => {
      wrapper.find(Button).find({ value: 1 }).simulate("press");
      expect(wrapper.find({ id: "entryText" }).text()).toBe(2);
    });
  });
});

/**
 * @jest-environment jsdom
 */
import React from "react";
import { mount } from "enzyme";
import { Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Screen from "../../src/components/Screen";
import calculatorReducer from "../../src/providers/redux/reducer";

describe("<Screen />", () => {
  it("renders screen", () => {
    const mockStore = createStore(calculatorReducer);
    const wrapper = mount(
      <Provider store={mockStore}>
        <Screen />
      </Provider>
    );

    expect(wrapper.find(Text).first().text()).toBe("");
    expect(wrapper.find(Text).last().text()).toBe("0");
  });

  it("renders with correct values", () => {
    const expression = "1 + 2 * 3 -";
    const entry = "4";
    const mockStore = createStore(calculatorReducer, { expression, entry });
    const wrapper = mount(
      <Provider store={mockStore}>
        <Screen />
      </Provider>
    );

    expect(wrapper.find(Text).first().text()).toBe(expression);
    expect(wrapper.find(Text).last().text()).toBe(entry);
  });
});

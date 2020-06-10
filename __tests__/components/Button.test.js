/**
 * @jest-environment jsdom
 */
import React from "react";
import { mount } from "enzyme";
import { Text, Platform } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Button from "../../src/components/Button";
import { calculatorButtonPressed } from "../../src/providers/redux/actions";
import calculatorReducer from "../../src/providers/redux/reducer";

describe("<Button />", () => {
  const getWrapper = (value, mockStore = createStore(calculatorReducer)) =>
    mount(
      <Provider store={mockStore}>
        <Button value={value} />
      </Provider>
    );

  describe("render number button", () => {
    it("renders button", () => {
      expect(getWrapper(1).find(Text).text()).toBe("1");
    });

    it("should trigger button press", () => {
      const mockStore = createStore(calculatorReducer);
      mockStore.dispatch = jest.fn();
      const wrapper = getWrapper(1, mockStore);
      if (Platform.OS === "android") {
        wrapper.find("TouchableNativeFeedback").props().onPress();
      } else {
        wrapper.find("TouchableHighlight").props().onPress();
      }

      expect(mockStore.dispatch).toHaveBeenCalledWith(
        calculatorButtonPressed(1)
      );
    });
  });

  describe("render expression button", () => {
    it("renders button", () => {
      expect(getWrapper("+").find(Text).text()).toBe("+");
    });

    it("should trigger button press", () => {
      const mockStore = createStore(calculatorReducer);
      mockStore.dispatch = jest.fn();
      const wrapper = getWrapper("+", mockStore);
      if (Platform.OS === "android") {
        wrapper.find("TouchableNativeFeedback").props().onPress();
      } else {
        wrapper.find("TouchableHighlight").props().onPress();
      }

      expect(mockStore.dispatch).toHaveBeenCalledWith(
        calculatorButtonPressed("+")
      );
    });
  });
});

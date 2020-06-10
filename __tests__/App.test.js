/**
 * @jest-environment jsdom
 */
import { mount } from "enzyme";
import React from "react";
import { Platform, Text } from "react-native";

import App from "../App";
import Button from "../src/components/Button";
import Screen from "../src/components/Screen";

describe("<App />", () => {
  let buttonType;
  if (Platform.OS === "android") {
    buttonType = "TouchableNativeFeedback";
  } else {
    buttonType = "TouchableHighlight";
  }

  const wrapper = mount(<App />);
  it("pressing 1 should show on display", () => {
    const value = 1;
    wrapper.find(Button).find({ value }).find(buttonType).props().onPress();
    expect(wrapper.find(Screen).find(Text).last().text()).toBe("1");
  });
});

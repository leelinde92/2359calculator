import {
  actions,
  calculatorButtonPressed,
} from "../../../src/providers/redux/actions";

describe("actions", () => {
  it("should enter as entry", () => {
    const expectedAction = {
      type: actions.CALCULATOR.ENTRY,
      payload: 1,
    };

    expect(calculatorButtonPressed(1)).toEqual(expectedAction);
  });

  it("should enter as expression", () => {
    const expectedAction = {
      type: actions.CALCULATOR.EXPRESSION,
      payload: "*",
    };

    expect(calculatorButtonPressed("*")).toEqual(expectedAction);
  });

  it("should evaluate expression", () => {
    const expectedAction = {
      type: actions.CALCULATOR.EVAL,
    };

    expect(calculatorButtonPressed("=")).toEqual(expectedAction);
  });

  it("should send clear action", () => {
    const expectedAction = {
      type: actions.CALCULATOR.CLEAR,
    };

    expect(calculatorButtonPressed("C")).toEqual(expectedAction);
  });
});

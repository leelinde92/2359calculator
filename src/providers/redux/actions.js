export const actions = {
  CALCULATOR: {
    EXPRESSION: "CALCULATOR_EXPRESSION",
    ENTRY: "CALCULATOR_ENTRY",
    CLEAR: "CALCULATOR_CLEAR",
    EVAL: "CALCULATOR_EVAL",
  },
};

export const calculatorButtonPressed = (button) => {
  if (typeof button === "number" && button >= 0 && button <= 9) {
    return {
      type: actions.CALCULATOR.ENTRY,
      payload: button,
    };
  }

  if (button === "=") {
    return {
      type: actions.CALCULATOR.EVAL,
    };
  }

  if (button === "C") {
    return {
      type: actions.CALCULATOR.CLEAR,
    };
  }

  return {
    type: actions.CALCULATOR.EXPRESSION,
    payload: button,
  };
  // TODO: Check arithmetic function, and handle it accordingly.
};

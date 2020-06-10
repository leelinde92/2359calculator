import calculatorReducer from "../../../src/providers/redux/reducer";
import { actions } from "../../../src/providers/redux/actions";

describe("calculator reducer", () => {
  it("should return the initial state", () => {
    expect(calculatorReducer(undefined, {})).toEqual({
      evaluated: false,
      expression: "",
      entry: "0",
    });
  });

  it("should enter entry", () => {
    expect(
      calculatorReducer(undefined, {
        type: actions.CALCULATOR.ENTRY,
        payload: 1,
      })
    ).toEqual({
      evaluated: false,
      expression: "",
      entry: "1",
    });
  });

  it("should clear calculator", () => {
    expect(
      calculatorReducer(undefined, {
        type: actions.CALCULATOR.CLEAR,
      })
    ).toEqual({
      evaluated: false,
      expression: "",
      entry: "0",
    });
  });

  it("should do nothing", () => {
    expect(
      calculatorReducer(undefined, {
        type: actions.CALCULATOR.EXPRESSION,
        payload: "*",
      })
    ).toEqual({
      evaluated: false,
      expression: "",
      entry: "0",
    });
  });

  it("should add expression", () => {
    expect(
      calculatorReducer(
        {
          evaluated: false,
          expression: "",
          entry: "1",
        },
        {
          type: actions.CALCULATOR.EXPRESSION,
          payload: "*",
        }
      )
    ).toEqual({
      evaluated: false,
      expression: "1 *",
      entry: "0",
    });
  });

  it("should append trailing 0 after decimal", () => {
    expect(
      calculatorReducer(
        {
          evaluated: false,
          expression: "",
          entry: "15.",
        },
        {
          type: actions.CALCULATOR.EXPRESSION,
          payload: "*",
        }
      )
    ).toEqual({
      evaluated: false,
      expression: "15.0 *",
      entry: "0",
    });
  });

  it("should evaluate statement", () => {
    expect(
      calculatorReducer(
        {
          evaluated: false,
          expression: "1 + 2 - 3 *",
          entry: "4",
        },
        {
          type: actions.CALCULATOR.EVAL,
        }
      )
    ).toEqual({
      evaluated: true,
      expression: "1 + 2 - 3 * 4 =",
      entry: -9,
    });
  });

  it("should do nothing if state is evaluated", () => {
    expect(
      calculatorReducer(
        {
          evaluated: true,
          expression: "1 + 2 - 3 * 4 =",
          entry: -9,
        },
        {
          type: actions.CALCULATOR.EVAL,
        }
      )
    ).toEqual({
      evaluated: true,
      expression: "1 + 2 - 3 * 4 =",
      entry: -9,
    });
  });

  it("should replace entry with new entry value after evaluation", () => {
    expect(
      calculatorReducer(
        {
          evaluated: true,
          expression: "1 + 2 - 3 * 4 =",
          entry: -9,
        },
        {
          type: actions.CALCULATOR.ENTRY,
          payload: 3,
        }
      )
    ).toEqual({
      evaluated: false,
      expression: "",
      entry: "3",
    });
  });

  it("should append to entry", () => {
    expect(
      calculatorReducer(
        {
          evaluated: false,
          expression: "",
          entry: "9",
        },
        {
          type: actions.CALCULATOR.ENTRY,
          payload: "3",
        }
      )
    ).toEqual({
      evaluated: false,
      expression: "",
      entry: "93",
    });
  });

  it("should use evaluated value for new expression", () => {
    expect(
      calculatorReducer(
        {
          evaluated: true,
          expression: "1 + 2 - 3 * 4 =",
          entry: -9,
        },
        {
          type: actions.CALCULATOR.EXPRESSION,
          payload: "*",
        }
      )
    ).toEqual({
      evaluated: false,
      expression: "-9 *",
      entry: "0",
    });
  });

  it("should replace last operator with new operator pressed", () => {
    expect(
      calculatorReducer(
        {
          evaluated: false,
          expression: "1 + 2 -",
          entry: "0",
        },
        {
          type: actions.CALCULATOR.EXPRESSION,
          payload: "*",
        }
      )
    ).toEqual({
      evaluated: false,
      expression: "1 + 2 *",
      entry: "0",
    });
  });

  it("should add leading 0 for decimal", () => {
    expect(
      calculatorReducer(
        {
          evaluated: false,
          expression: "",
          entry: "0",
        },
        {
          type: actions.CALCULATOR.ENTRY,
          payload: ".",
        }
      )
    ).toEqual({
      evaluated: false,
      expression: "",
      entry: "0.",
    });
  });

  it("should ignore decimal if exists", () => {
    expect(
      calculatorReducer(
        {
          evaluated: false,
          expression: "",
          entry: "0.998",
        },
        {
          type: actions.CALCULATOR.ENTRY,
          payload: ".",
        }
      )
    ).toEqual({
      evaluated: false,
      expression: "",
      entry: "0.998",
    });
  });

  it("should not ignore decimal if doesn't exists", () => {
    expect(
      calculatorReducer(
        {
          evaluated: false,
          expression: "",
          entry: "998",
        },
        {
          type: actions.CALCULATOR.ENTRY,
          payload: ".",
        }
      )
    ).toEqual({
      evaluated: false,
      expression: "",
      entry: "998.",
    });
  });

  it("should appending leading 0 when pressing decimal after evaluation", () => {
    expect(
      calculatorReducer(
        {
          evaluated: true,
          expression: "900 + 90 =",
          entry: "998",
        },
        {
          type: actions.CALCULATOR.ENTRY,
          payload: ".",
        }
      )
    ).toEqual({
      evaluated: false,
      expression: "",
      entry: "0.",
    });
  });

  it("should append entry and new expression", () => {
    expect(
      calculatorReducer(
        {
          evaluated: false,
          expression: "900 +",
          entry: "90",
        },
        {
          type: actions.CALCULATOR.EXPRESSION,
          payload: "*",
        }
      )
    ).toEqual({
      evaluated: false,
      expression: "900 + 90 *",
      entry: "0",
    });
  });

  describe("evaluation test cases", () => {
    it("1 + 2 - 3 * 4", () => {
      expect(
        calculatorReducer(
          {
            evaluated: false,
            expression: "1 + 2 - 3 *",
            entry: "4",
          },
          {
            type: actions.CALCULATOR.EVAL,
          }
        )
      ).toEqual({
        evaluated: true,
        expression: "1 + 2 - 3 * 4 =",
        entry: -9,
      });
    });

    it("simple addition", () => {
      expect(
        calculatorReducer(
          {
            evaluated: false,
            expression: "1 +",
            entry: "2",
          },
          {
            type: actions.CALCULATOR.EVAL,
          }
        )
      ).toEqual({
        evaluated: true,
        expression: "1 + 2 =",
        entry: 3,
      });
    });

    it("simple subtraction", () => {
      expect(
        calculatorReducer(
          {
            evaluated: false,
            expression: "2 -",
            entry: "4",
          },
          {
            type: actions.CALCULATOR.EVAL,
          }
        )
      ).toEqual({
        evaluated: true,
        expression: "2 - 4 =",
        entry: -2,
      });
    });

    it("simple multiplication", () => {
      expect(
        calculatorReducer(
          {
            evaluated: false,
            expression: "3 *",
            entry: "4",
          },
          {
            type: actions.CALCULATOR.EVAL,
          }
        )
      ).toEqual({
        evaluated: true,
        expression: "3 * 4 =",
        entry: 12,
      });
    });

    it("simple division", () => {
      expect(
        calculatorReducer(
          {
            evaluated: false,
            expression: "9 /",
            entry: "2",
          },
          {
            type: actions.CALCULATOR.EVAL,
          }
        )
      ).toEqual({
        evaluated: true,
        expression: "9 / 2 =",
        entry: 4.5,
      });
    });

    it("8 * 9 - 4 / 2", () => {
      expect(
        calculatorReducer(
          {
            evaluated: false,
            expression: "8 * 9 - 4 /",
            entry: "2",
          },
          {
            type: actions.CALCULATOR.EVAL,
          }
        )
      ).toEqual({
        evaluated: true,
        expression: "8 * 9 - 4 / 2 =",
        entry: 70,
      });
    });

    it("3.5 * 2 + 9 / 2 * 3", () => {
      expect(
        calculatorReducer(
          {
            evaluated: false,
            expression: "3.5 * 2 + 9 / 2 *",
            entry: "3",
          },
          {
            type: actions.CALCULATOR.EVAL,
          }
        )
      ).toEqual({
        evaluated: true,
        expression: "3.5 * 2 + 9 / 2 * 3 =",
        entry: 20.5,
      });
    });

    it("3.5 * 2 + 9 / 2 * 3 - 2 * 6 / 3", () => {
      expect(
        calculatorReducer(
          {
            evaluated: false,
            expression: "3.5 * 2 + 9 / 2 * 3 - 2 * 6 /",
            entry: "3",
          },
          {
            type: actions.CALCULATOR.EVAL,
          }
        )
      ).toEqual({
        evaluated: true,
        expression: "3.5 * 2 + 9 / 2 * 3 - 2 * 6 / 3 =",
        entry: 16.5,
      });
    });
  });
});

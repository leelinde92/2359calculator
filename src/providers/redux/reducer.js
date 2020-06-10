import { actions } from "./actions";

const initialState = {
  evaluated: false,
  expression: "",
  entry: "0",
};

const evaluateExpression = (expression) => {
  const evaluations = expression.split(" ");
  console.log(evaluations);
  // TODO: Loop through and evaluate multiplications and divisons first
  // TODO: Loop through and evaluate additions and subtractions
  return "NaN";
};

const appendTrailingDecimal = (entry) => {
  if (entry.charAt(entry.length - 1) === ".") {
    return `${entry}0`;
  }

  return entry;
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CALCULATOR.EXPRESSION:
      if (state.evaluated) {
        return {
          ...initialState,
        };
      }

      if (state.entry === "0") {
        return state;
      }

      const newExpression = `${appendTrailingDecimal(state.entry)} ${
        action.payload
      }`;
      console.log(newExpression);
      return {
        ...state,
        evaluated: false,
        expression:
          state.expression === ""
            ? newExpression
            : `${state.expression} ${newExpression}`,
        entry: "0",
      };
    case actions.CALCULATOR.CLEAR:
      return {
        ...initialState,
      };
    case actions.CALCULATOR.EVAL:
      const finalExpression = `${state.expression} ${appendTrailingDecimal(
        state.entry
      )}`;

      const result = evaluateExpression(finalExpression);
      return {
        ...state,
        evaluated: true,
        expression: `${finalExpression} =`,
        entry: result,
      };
    case actions.CALCULATOR.ENTRY:
      if (state.evaluated) {
        return {
          ...initialState,
          entry: `${action.payload}`,
        };
      }

      if (state.entry === "0") {
        return {
          ...state,
          entry: `${action.payload}`,
        };
      }

      return {
        ...state,
        entry: `${state.entry}${action.payload}`,
      };
    default:
      return state;
  }
};

export default calculatorReducer;

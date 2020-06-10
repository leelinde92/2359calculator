import { actions } from "./actions";

const initialState = {
  evaluated: false,
  expression: "",
  entry: "0",
};

const replaceEvaluatedNumber = (evalArray, index, number) => {
  evalArray[index - 1] = null;
  evalArray[index] = null;
  evalArray[index + 1] = number;
};

const evaluateExpression = (expression) => {
  let evaluations = expression.split(" ");
  evaluations.forEach((char, index) => {
    switch (char) {
      case "*":
        replaceEvaluatedNumber(
          evaluations,
          index,
          parseFloat(evaluations[index - 1]) *
            parseFloat(evaluations[index + 1])
        );
        break;
      case "/":
        replaceEvaluatedNumber(
          evaluations,
          index,
          parseFloat(evaluations[index - 1]) *
            parseFloat(evaluations[index + 1])
        );
        break;
    }
  });

  evaluations = evaluations.filter((char) => char !== null);
  evaluations.forEach((char, index) => {
    switch (char) {
      case "+":
        replaceEvaluatedNumber(
          evaluations,
          index,
          parseFloat(evaluations[index - 1]) +
            parseFloat(evaluations[index + 1])
        );
        break;
      case "-":
        replaceEvaluatedNumber(
          evaluations,
          index,
          parseFloat(evaluations[index - 1]) -
            parseFloat(evaluations[index + 1])
        );
        break;
    }
  });

  return evaluations[evaluations.length - 1];
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
          ...state,
          evaluated: false,
          expression: `${state.entry} ${action.payload}`,
          entry: "0",
        };
      }

      if (state.entry === "0") {
        return state;
      }

      const newExpression = `${appendTrailingDecimal(state.entry)} ${
        action.payload
      }`;

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
      if (state.evaluated) {
        return state;
      }

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

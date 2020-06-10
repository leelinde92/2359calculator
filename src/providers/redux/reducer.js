import { actions } from "./actions";

const initialState = {
  evaluated: false,
  expression: "",
  entry: "0",
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

      return {
        ...state,
        evaluated: false,
        expression: `${state.expression} ${state.entry} ${action.payload}`,
        entry: "0",
      };
    case actions.CALCULATOR.CLEAR:
      return {
        ...initialState,
      };
    case actions.CALCULATOR.EVAL:
      // TODO: Evaluate result from expression.
      const result = "NaN";
      return {
        ...state,
        evaluated: true,
        expression: `${state.expression} ${state.entry} =`,
        entry: result,
      };
    case actions.CALCULATOR.ENTRY:
      if (state.evaluated) {
        return {
          ...initialState,
          entry: action.payload,
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

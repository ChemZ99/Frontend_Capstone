import { ADD_TOKEN } from "../actions";
import { ADD_ROLE } from "../actions";
import { ADD_USER } from "../actions";

const initialState = {
  token: "",
  role: "",
  user: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case ADD_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;

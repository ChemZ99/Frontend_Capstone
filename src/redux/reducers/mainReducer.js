import {
  GET_JOBS,
  HAS_ERROR_FALSE,
  HAS_ERROR_TRUE,
  IS_LOADING_FALSE,
  IS_LOADING_TRUE,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
} from "../actions";

const initialState = {
  favlist: [],
  content: [],
  controls: {
    isLoading: false,
    hasError: false,
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_TRUE:
      return {
        ...state,
        controls: {
          ...state.controls,
          isLoading: true,
        },
      };

    case IS_LOADING_FALSE:
      return {
        ...state,
        controls: {
          ...state.controls,
          isLoading: false,
        },
      };

    case HAS_ERROR_TRUE:
      return {
        ...state,
        controls: {
          ...state.controls,
          hasError: true,
        },
      };

    case HAS_ERROR_FALSE:
      return {
        ...state,
        controls: {
          ...state.controls,
          hasError: false,
        },
      };
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favlist: [...state.favlist, action.payload],
      };

    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favlist: state.favlist.filter(fav => fav !== action.payload),
      };
    case GET_JOBS:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;

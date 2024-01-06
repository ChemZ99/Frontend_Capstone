import { useSelector } from "react-redux";

export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_MAIN_DATA = "GET_MAIN_DATA";
export const IS_LOADING_TRUE = "IS_LOADING_TRUE";
export const IS_LOADING_FALSE = "IS_LOADING_FALSE";
export const HAS_ERROR_TRUE = "HAS_ERROR_TRUE";
export const HAS_ERROR_FALSE = "HAS_ERROR_FALSE";
export const ADD_TOKEN = "ADD_TOKEN";
export const ADD_ROLE = "ADD_ROLE";
export const ADD_USER = "ADD_USER";

export const addToken = token => ({ type: ADD_TOKEN, payload: token });
export const addRole = role => ({ type: ADD_ROLE, payload: role });
export const addUser = user => ({ type: ADD_USER, payload: user });

export const addToFavoritesAction = companyName => ({
  type: ADD_TO_FAVOURITE,
  payload: companyName,
});

export const removeFromFavoritesAction = companyName => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: companyName,
});

export const isLoadingTrueAction = () => ({
  type: IS_LOADING_TRUE,
  payload: true,
});

export const isLoadingFalseAction = () => ({
  type: IS_LOADING_FALSE,
  payload: false,
});

export const HasErrorTrueAction = () => ({
  type: HAS_ERROR_TRUE,
  payload: true,
});

export const HasErrorFalseAction = () => ({
  type: HAS_ERROR_FALSE,
  payload: false,
});

export const FetchMainDataQueryAction = query => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: IS_LOADING_TRUE });
      dispatch({ type: HAS_ERROR_FALSE });
      const response = await fetch("http://localhost:3001/cities/name=" + query);
      if (response.ok) {
        const data = await response.json();

        dispatch({ type: GET_MAIN_DATA, payload: data });
        console.log("MAIN_DATA", data);
      } else {
        dispatch({ type: HAS_ERROR_TRUE });
        alert("Error fetching results");
      }
    } catch (error) {
      dispatch({ type: HAS_ERROR_TRUE });
      console.log(error);
    } finally {
      dispatch({ type: IS_LOADING_FALSE });
    }
  };
};

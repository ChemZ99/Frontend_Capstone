//import { useDispatch, useSelector } from "react-redux";

export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
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

/*export const FetchQuery = async () => {
  const query = useSelector(state => state.input);

  if (query.length > 2) {
    //if there's a value in the search box => fetch the information from rapidapi & display the result
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query, {
        method: "GET",
      }); // gets the information

      if (response.ok) {
        let result = await response.json(); // transforms the response to json
        let songs = result.data; // gets the songs info
        SaveQueryDataAction(songs);
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  }
};

export const fetchArtist = async (artistName, selector) => {
  // artistName = "eminem", "metallica", etc...
  // domQuerySelector = "#rockSection" etc...
  try {
    let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, {
      method: "GET",
    }); // gets the information
    if (response.ok) {
      let result = await response.json(); // transforms the response to json
      let songInfo = result.data;
      if (selector === "rock") addHomecardDataRockAction(songInfo);
      else if (selector === "pop") AddHomecardDataPopAction(songInfo);
      else if (selector === "hiphop") AddHomecardDataHipHopAction(songInfo);
    } else {
      console.log("error");
    }
  } catch (err) {
    console.log(err);
  }
};*/

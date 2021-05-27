// initial state
export const initialState = {
  url: null,
};

// action type
export const SET_URL = "setUrl";
export const CLEAR_URL = "clearUrl";

// action
export const setUrl = (url) => {
  return {
    type: SET_URL,
    data: {
      url,
    },
  };
};

export const clearUrl = () => {
  return {
    type: CLEAR_URL,
    data: {
      url: null,
    },
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_URL: {
      return { ...state, url: action.data.url };
    }
    case CLEAR_URL: {
      return { ...state, url: null };
    }
    default: {
      return {
        ...initialState,
      };
    }
  }
};

export default reducer;

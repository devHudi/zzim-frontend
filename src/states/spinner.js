// initial state
export const initialState = {
  visible: false,
};

// action type
export const SHOW_SPINNER = "showSpinner";
export const HIDE_SPINNER = "hideSpinner";

// action
export const showSpinner = {
  type: SHOW_SPINNER,
  data: {
    visible: true,
  },
};

export const hideSpinner = {
  type: HIDE_SPINNER,
  data: {
    visible: false,
  },
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SPINNER: {
      return { ...state, visible: true };
    }
    case HIDE_SPINNER: {
      return { ...state, visible: false };
    }
    default: {
      return {
        ...initialState,
      };
    }
  }
};

export default reducer;

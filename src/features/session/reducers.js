import SESSION_TYPES from "./types";

export default (state = {}, action) => {
  switch (action.type) {
    case SESSION_TYPES.FETCH_SUCCEEDED:
      return {
        ...action.session,
        ...action.authorization
      };

    case SESSION_TYPES.FETCH_FAILED:
      return {
        error: {
          message: "Unable to load session"
        }
      };
      
    case SESSION_TYPES.SET_SUCCEEDED:
      return {
        ...action.session,
        ...action.authorization
      };

    case SESSION_TYPES.SET_FAILED:
      return {
        error: {
          message: "Unable to set session"
        }
      };

    default:
      return state;
  }
};


export const getSessionLocation = (state) => {
  return state.sessionLocation;
};

export const getCurrentProvider = (state) => {
  return state.currentProvider;
};

export const getUser = (state) => {
  return state.user;
};

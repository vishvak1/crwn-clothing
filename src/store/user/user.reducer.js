import { USER_REDUCER_TYPES } from "./user.types";

const INITIAL_STATE = { currentUser: null };

export const UserReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REDUCER_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};

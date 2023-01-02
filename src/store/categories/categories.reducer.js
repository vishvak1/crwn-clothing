import { CATEGORIES_REDUCER_TYPES } from "./categories.types";

const INITIAL_STATE = { categories: [] };

export const CategoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_REDUCER_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};

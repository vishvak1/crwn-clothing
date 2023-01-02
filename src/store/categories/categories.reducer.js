import { CATEGORIES_REDUCER_TYPES } from "./categories.types";

const INITIAL_STATE = { categoriesMap: {} };

export const CategoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_REDUCER_TYPES.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};

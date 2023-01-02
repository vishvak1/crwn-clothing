import { createAction } from "../../utils/reducer/reducer.util";

import { CATEGORIES_REDUCER_TYPES } from "./categories.types";

export const setCategories = (categoriesArray) => {
  return createAction(CATEGORIES_REDUCER_TYPES.SET_CATEGORIES, categoriesArray);
};

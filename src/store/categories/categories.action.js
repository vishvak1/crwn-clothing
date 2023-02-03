import { createAction } from "../../utils/reducer/reducer.util";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";
import { CATEGORIES_REDUCER_TYPES } from "./categories.types";

export const setCategories = (categoriesArray) => {
  return createAction(CATEGORIES_REDUCER_TYPES.SET_CATEGORIES, categoriesArray);
};

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_REDUCER_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORIES_REDUCER_TYPES.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailure = (error) =>
  createAction(CATEGORIES_REDUCER_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error));
  }
};

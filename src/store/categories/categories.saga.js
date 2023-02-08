import { all, call, put, takeLatest } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from "./categories.action";

import { CATEGORIES_REDUCER_TYPES } from "./categories.types";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_REDUCER_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}

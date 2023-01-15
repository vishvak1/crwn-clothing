import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => {
  console.log("1st category reducer called");
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => {
    console.log("2nd category reducer called");
    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    console.log("3rd category reducer called");
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

// export const selectCategoriesMap = (state) =>
//   state.categories.categories.reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});

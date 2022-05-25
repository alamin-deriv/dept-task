import { createSelector } from "reselect";

const selectDept = (state) => state.dept;


export const selectIsLoading = createSelector(
  [selectDept],
  (dept) => dept.isLoading
);

export const selectListOfContents = createSelector(
  [selectDept],
  (dept) => dept.listOfContents
);


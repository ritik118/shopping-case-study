import { createAction } from "../../utils/reducer/reducer.util";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export const setCategoryData = (categoryData) => createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY_DATA, categoryData);


import { CATEGORY_ACTION_TYPES } from "./category.types";

const CATEGORY_INITIAL_STATE = {
    categoryItems: [],
    isCategoryLoading: true
};

export const categoryReducer = (state = CATEGORY_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORY_ACTION_TYPES.SET_CATEGORY_DATA:
            return {...state, categoryItems: payload, isCategoryLoading: false}
        default:
            return state;
    }
}
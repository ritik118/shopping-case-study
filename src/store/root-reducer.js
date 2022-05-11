import { combineReducers } from 'redux';
import { bannerReducer } from './banner/banner.reducer';
import { categoryReducer } from './categories/category.reducer';

export const rootReducer = combineReducers({
    banner: bannerReducer,
    category: categoryReducer
})
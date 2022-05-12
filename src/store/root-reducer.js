import { combineReducers } from 'redux';
import { bannerReducer } from './banner/banner.reducer';
import { categoryReducer } from './categories/category.reducer';
import { productReducer } from './products/product.reducer';

export const rootReducer = combineReducers({
    banner: bannerReducer,
    category: categoryReducer,
    product: productReducer
})
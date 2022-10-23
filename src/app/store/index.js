import { configureStore } from '@reduxjs/toolkit';
import {applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {fetchProducts} from "../../components/Products/reducers"
import {loadingReducer} from "../../components/common/Loading/reducers"
import cartReducers from "../../components/Cart/reducers";

export const INITIAL_STATE =   {
  isLoading: true,
  products: {
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
    error: null
  },
  cart: []
}

export const reducer =  combineReducers({
  products: fetchProducts,
  loading: loadingReducer,
  cart: cartReducers
})

export default configureStore({reducer},applyMiddleware(thunk));
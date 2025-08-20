import {ProductModel} from '../../module/product.model';
import {ProductState} from './product.state';
import {createReducer, on} from '@ngrx/store';
import * as ProductActions from './product.actions';

// export const initialState:ProductState = {
//   productList: <ProductModel[]>[],
//   productDetail: <ProductModel>{},
//   isLoading: false,
//   error: null,
// }
//
// export const productReducer = createReducer(
//   initialState,
//
//   on(ProductActions.getAllProducts, (state, {type})=>{
//     console.log(type);
//     return {
//       ...state,
//       isLoading: true,
//       error: null,
//     }
//   }),
//
//   on(ProductActions.getAllProductsSuccess, (state, {type, products})=>{
//     console.log(type);
//     return {
//       ...state,
//       productList: products,
//       isLoading: false,
//       error: null,
//     }
//   }),
//
//   on(ProductActions.getAllProductsFailure, (state, {type, error})=>{
//     console.log(type);
//     return {
//       ...state,
//       isLoading: false,
//       error: error,
//     }
//   }),
//
//   on(ProductActions.getProductDetail, (state, {type, productId})=>{
//     console.log(type);
//     return {
//       ...state,
//       isLoading: true,
//       error: null,
//     }
//   }),
//
//   on(ProductActions.getProductDetailSuccess, (state, {type, product})=>{
//     console.log(type);
//     return {
//       ...state,
//       productDetail: product,
//       isLoading: false,
//       error: null,
//     }
//   }),
//
//   on(ProductActions.getProductDetailFailure, (state, {type, error})=>{
//     console.log(type);
//     return {
//       ...state,
//       isLoading: false,
//       error: error,
//     }
//   }),
//
//   on(ProductActions.createProduct, (state, {type, product})=>{
//     console.log(type);
//     return {
//       ...state,
//       isLoading: true,
//       error: null,
//     }
//   }),
//
//   on(ProductActions.createProductSuccess, (state, {type, product})=>{
//     console.log(type);
//     return {
//       ...state,
//       productList: product,
//       isLoading: false,
//       error: null,
//     }
//   }),
//
//   on(ProductActions.createProductFailure, (state, {type, error})=>{
//     console.log(type);
//     return {
//       ...state,
//       isLoading: false,
//       error: error,
//     }
//   }),
// )

export const initialProductState: ProductState = {
  productList: <ProductModel[]>[],
  productDetail: <ProductModel>{},
  isLoading: false,
  error: null
}


export const productReducer = createReducer(
  initialProductState,

  on(ProductActions.getAllProducts, (state, {type,idToken}) => {
    console.log(type);
    return{
      ...state,
      isLoading: true,
      error: null
    }
  }),

  on(ProductActions.getAllProductsSuccess,(state,{products, type}) =>{
    console.log(type);
    return{
      ...state,
      productList: products,
      isLoading: false,
    }
  }),

  on(ProductActions.getAllProductsFailure, (state, {error, type}) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error
    }
  }),

  //get product by id
  on(ProductActions.getProductDetail, (state, {productId, type, idToken}) => {
    console.log(type);
    return {
      ...state,
      productDetail: <ProductModel>{},
      isLoading: true,
      error: null
    }
  }),

  on(ProductActions.getProductDetailSuccess, (state, {product, type}) => {
    console.log(type);
    return {
      ...state,
      productDetail: product,
      isLoading: false
    }
  }),

  on(ProductActions.getProductDetailFailure, (state, {error, type}) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error
    }
  }),


  on(ProductActions.createProduct, (state, {type,idToken}) =>{
    console.log(type);
    return {
      ...state,
      isLoading: true,
      error: null
    }
  }),

  on(ProductActions.createProductSuccess,(state,{product, type})=>{
    console.log(type);
    return {
      ...state,
      productDetail: product,
      isLoading: false
    }
  }),

  on(ProductActions.createProductFailure, (state, {error, type}) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error
    }
  }),

  on(ProductActions.deleteProduct, (state, {type, idToken, productId}) => {
    console.log(type);
    return {
      ...state,
      productDetail: <ProductModel>{},
      isLoading: true,
      error: null
    }
  }),

  on(ProductActions.deleteProductSuccess, (state, {product, type}) => {
    console.log(type);
    return {
      ...state,
      productDetail: product,
      isLoading: false
    }
  }),

  on(ProductActions.deleteProductFailure, (state, {error, type}) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error
    }
  }),

  on(ProductActions.updateProduct, (state, {type, idToken, product}) => {
    console.log(type);
    return {
      ...state,
      productDetail: <ProductModel>{},
      isLoading: true,
      error: null
    }
  }),

  on(ProductActions.updateProductSuccess, (state, {product, type}) => {
    console.log(type);
    return {
      ...state,
      productList: product,
      isLoading: false
    }
  }),

  on(ProductActions.updateProductFailure, (state, {error, type}) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error
    }
  }),

)

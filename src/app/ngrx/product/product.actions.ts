import {createAction, props} from '@ngrx/store';
import {ProductModel} from '../../module/product.model';

// export const getAllProducts = createAction(
//   '[Product] getAllProducts'
// );
//
// export const getAllProductsSuccess = createAction(
//   '[Product] getAllProductsSuccess', props<{products:ProductModel[]}>()
// );
//
// export const getAllProductsFailure = createAction(
//   '[Product] getAllProductsFailure', props<{error:any}>()
// );
//
// export const getProductDetail = createAction(
//   '[Product] getProductDetail', props<{productId: string}>()
// );
//
// export const getProductDetailSuccess = createAction(
//   '[Product] getProductDetailSuccess', props<{product: ProductModel}>()
// );
//
// export const getProductDetailFailure = createAction(
//   '[Product] getProductDetailFailure', props<{error:any}>()
// );
//
// export const createProduct = createAction(
//   '[Product] createProduct', props<{product: ProductModel}>()
// );
//
// export const createProductSuccess = createAction(
//   '[Product] createProductSuccess', props<{product: ProductModel[]}>()
// );
//
// export const createProductFailure = createAction(
//   '[Product] createProductFailure', props<{error:any}>()
// );

export const getAllProducts = createAction(
  '[Product] Get All Products', props<{idToken: string}>()
);

export const getAllProductsSuccess = createAction(
  '[Product] Get All Products Success', props<{products:ProductModel[] }>()
);

export const getAllProductsFailure = createAction(
  '[Product] Get All Products Failure', props<{error: any}>()
);

//get detail of a product
export const getProductDetail = createAction(
  '[Product] Get Product Detail', props<{productId: string, idToken: string}>()
);

export const getProductDetailSuccess = createAction(
  '[Product] Get Product Detail Success', props<{product: ProductModel}>()
);

export const getProductDetailFailure = createAction(
  '[Product] Get Product Detail Failure', props<{error: any}>()
);


export const createProduct = createAction(
  '[Product] Create Product', props<{ product: ProductModel }>()
)

export const createProductSuccess = createAction(
  '[Product] Create Product Success', props<{products: ProductModel[]}>()
);

export const createProductFailure = createAction(
  '[Product] Create Product Failure', props<{error: any}>()
);

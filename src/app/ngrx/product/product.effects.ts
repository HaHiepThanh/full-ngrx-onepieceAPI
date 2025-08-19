import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject} from '@angular/core';
import * as ProductActions from './product.actions';
import {ProductService} from '../../service/product/product.service';
import {catchError, map, of, switchMap} from 'rxjs';

// export const getAllProductsEffects = createEffect(
//   (action$ = inject(Actions), productService = inject(ProductService)) => {
//     return action$.pipe(
//       ofType(ProductActions.getAllProducts),
//       switchMap(() =>
//         productService.getAllProducts().pipe(
//           map((products) => ProductActions.getAllProductsSuccess({products})),
//           catchError((error: {message: any}) =>
//             of(ProductActions.getAllProductsFailure({error}))
//           )
//         )
//       )
//     );
//   },
//   {functional: true}
// )
//
// export const getProductDetailEffects = createEffect(
//   (action$ = inject(Actions), productService = inject(ProductService)) => {
//     return action$.pipe(
//       ofType(ProductActions.getProductDetail),
//       switchMap((action) =>
//         productService.getProductById(action.productId).pipe(
//           map((product) => ProductActions.getProductDetailSuccess({product})),
//           catchError((error: {message: any}) =>
//             of(ProductActions.getProductDetailFailure({error}))
//           )
//         )
//       )
//     );
//   },
//   {functional: true}
// );
//
// export const createProductEffects = createEffect(
//   (action$ = inject(Actions), productService = inject(ProductService)) => {
//     return action$.pipe(
//       ofType(ProductActions.createProduct),
//       switchMap((action) =>
//         productService.createProduct(action.product).pipe(
//           map((product) => ProductActions.createProductSuccess({product})),
//           catchError((error: {message: any}) =>
//             of(ProductActions.createProductFailure({error}))
//           )
//         )
//       )
//     );
//   },
//   {functional: true}
// );


export const getAllProductsEffect = createEffect(
  (actions$ = inject(Actions), productService= inject(ProductService)) =>{
    return actions$.pipe(
      ofType(ProductActions.getAllProducts),
      switchMap((action) =>productService.getAllProducts(action.idToken).pipe(
          map((products) => {
            console.log(products);
            return ProductActions.getAllProductsSuccess({products:products});
          }),
          catchError((error: {message: any; }) =>
            of(ProductActions.getAllProductsFailure({error})))
        )
      )
    )
  },
  {functional: true}
)


export const getProductDetailEffect = createEffect(
  (actions$ = inject(Actions), productService= inject(ProductService)) =>{
    return actions$.pipe(
      ofType(ProductActions.getProductDetail),
      switchMap((action) => productService.getProductById(action.productId, action.idToken).pipe(
          map((product) => {
            console.log(product);
            return ProductActions.getProductDetailSuccess({product: product});
          }),
          catchError((error: {message: any; }) =>
            of(ProductActions.getProductDetailFailure({error})))
        )
      )
    )
  },
  {functional: true}
);

export const createProductEffect = createEffect(
  (actions$ = inject(Actions), productService= inject(ProductService)) =>{
    return actions$.pipe(
      ofType(ProductActions.createProduct),
      switchMap((action) => productService.createProduct(action.product, action.idToken).pipe(
          map((product) => {
            console.log('Product created successfully');
            return ProductActions.createProductSuccess({product: product});
          }),
          catchError((error: {message: any; }) =>
            of(ProductActions.createProductFailure({error})))
        )
      )
    )
  },
  {functional: true}
);

// export const updateProductEffect = createEffect(
//   (actions$ = inject(Actions), productService= inject(ProductService)) =>{
//     return actions$.pipe(
//       ofType(ProductActions.updateProduct),
//       switchMap((action) => productService.updateProduct(action.product, action.idToken).pipe(
//           map((product) => {
//             console.log('Product updated successfully');
//             return ProductActions.updateProductSuccess({product: product});
//           }),
//           catchError((error: {message: any; }) =>
//             of(ProductActions.updateProductFailure({error})))
//         )
//       )
//     )
//   },
//   {functional: true}
// );

export const deleteProductEffect = createEffect(
  (actions$ = inject(Actions), productService= inject(ProductService)) =>{
    return actions$.pipe(
      ofType(ProductActions.deleteProduct),
      switchMap((action) => productService.deleteProduct(action.productId, action.idToken).pipe(
          map((product) => {
            console.log('Product deleted successfully');
            return ProductActions.deleteProductSuccess({product: product});
          }),
          catchError((error: {message: any; }) =>
            of(ProductActions.deleteProductFailure({error})))
        )
      )
    )
  },
  {functional: true}
);



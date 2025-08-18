import {ProductModel} from '../../module/product.model';

export interface ProductState{
  productList: ProductModel[];
  productDetail: ProductModel;
  isLoading: boolean;
  error: any;
}

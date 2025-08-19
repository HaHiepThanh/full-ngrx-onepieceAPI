import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatHint, MatInput, MatLabel, MatSuffix} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import {select, Store} from '@ngrx/store';
import {AuthState} from '../../ngrx/auth/auth.state';
import {ProductState} from '../../ngrx/product/product.state';
import {Observable, Subscription} from 'rxjs';
import * as ProductActions from '../../ngrx/product/product.actions';
import {ProductModel} from '../../module/product.model';

@Component({
  selector: 'app-put',
  imports: [
    MatButton,
    MatFormField,
    MatHint,
    MatIconModule,
    MatInput,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
    MatFormField,
    MatHint
  ],
  templateUrl: './put.component.html',
  styleUrl: './put.component.scss'
})
export class PutComponent {
  //
  // idToken$!: Observable<string>;
  // idToken: string = '';
  // subscriptions: Subscription[] = [];
  // productList$!: Observable<ProductModel[]>;
  // productId: string = '';
  //
  // constructor(
  //   private store: Store<{
  //     product: ProductState,
  //     auth: AuthState
  //   }>,
  // ) {
  //   this.productList$ = this.store.select('product', 'productList');
  //   this.idToken$ = this.store.select('auth', 'IdToken');
  // }
  //
  // productForm = new FormGroup({
  //   id: new FormControl(''),
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   description: new FormControl(''),
  //   image: new FormControl('')
  // });
  //
  // //create a function compare the id input by user with the id of product in the list if it matches, log the statement product finded
  // findProductById(): void {
  //   const productId = this.productForm.value.id;
  //   if (productId) {
  //     this.productList$.pipe(
  //       select(productList => productList.find(product => product.id === productId))
  //     ).subscribe(product => {
  //       if (product) {
  //         console.log('Product found:', product);
  //         this.productForm.patchValue({
  //           name: product.name,
  //           price: product.price,
  //           description: product.description,
  //           image: product.image
  //         });
  //       } else {
  //         console.error('Product not found');
  //       }
  //     });
  //   } else {
  //     console.error('Please enter a valid Product ID');
  //   }
  // }
  //
  // updateProduct(): void {
  //   if (this.productForm.valid) {
  //     const updatedProduct: ProductModel = {
  //       id: this.productForm.value.id!,
  //       name: this.productForm.value.name || '',
  //       price: Number(this.productForm.value.price) || 0,
  //       description: this.productForm.value.description || '',
  //       image: this.productForm.value.image || ''
  //     };
  //
  //     console.log(updatedProduct);
  //
  //     this.store.dispatch(ProductActions.updateProduct({product: updatedProduct, idToken: this.idToken }));
  //
  //     this.productForm.reset();
  //   } else {
  //     console.error('Form is invalid');
  //   }
  // }
  //
  // ngOnInit() {
  //   this.subscriptions.push(
  //     this.idToken$.subscribe((idToken: string) => {
  //       if (idToken) {
  //         this.idToken = idToken;
  //       }
  //     }),
  //     this.productList$.subscribe((productList: ProductModel[]) => {
  //       console.log(productList);
  //     })
  //   )
  // }
  //
  // ngOnDestroy() {
  //   this.subscriptions.forEach(sub => sub.unsubscribe());
  // }


}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatHint, MatInput, MatLabel, MatSuffix} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import {ProductModel} from '../../module/product.model';
import * as ProductActions from '../../ngrx/product/product.actions';
import {AuthState} from '../../ngrx/auth/auth.state';
import {Store} from '@ngrx/store';
import {ProductState} from '../../ngrx/product/product.state';
import {v4 as uuid} from 'uuid';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-post',
  imports: [
    MatButton,
    MatFormField,
    MatHint,
    MatInput,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
    MatFormField,
    MatIconModule,
    MatHint
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit, OnDestroy {

  IdToken$!: Observable<string>;
  subscriptions: Subscription[] = [];
  IdToken: string = '';

  constructor(
    private store: Store<{
      product: ProductState,
      auth: AuthState
    }>,
  ) {
    this.IdToken$ = this.store.select('auth', 'IdToken');
  }

  productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(0),
    description: new FormControl(''),
    image: new FormControl('')
  });

  addProduct(){
    if (this.productForm.valid) {
      const newProduct: ProductModel = {
        id: '',
        name: this.productForm.value.name || '',
        price: Number(this.productForm.value.price) || 0,
        description: this.productForm.value.description || '',
        image: this.productForm.value.image || ''
      };
      console.log(newProduct);
      this.store.dispatch(ProductActions.createProduct({product: newProduct, idToken: this.IdToken}));
      this.productForm.reset();
    }else {
      console.error('Form is invalid');
    }
  }

  ngOnInit() {
    this.subscriptions.push(
      this.IdToken$.subscribe((idToken:string) => {
        if (idToken) {
          this.IdToken = idToken
        }
      }),
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}

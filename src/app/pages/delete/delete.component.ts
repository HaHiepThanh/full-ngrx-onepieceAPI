import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatHint, MatInput, MatLabel, MatSuffix} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import {Store} from '@ngrx/store';
import {ProductState} from '../../ngrx/product/product.state';
import {AuthState} from '../../ngrx/auth/auth.state';
import {Observable, Subscription} from 'rxjs';
import * as ProductActions from '../../ngrx/product/product.actions';

@Component({
  selector: 'app-delete',
  imports: [
    MatButton,
    MatFormField,
    MatHint,
    MatIconModule,
    MatInput,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
    MatHint,
    MatFormField
  ],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent implements OnInit , OnDestroy {

  idToken$!: Observable<string>;
  idToken: string = '';
  subscriptions: Subscription[] = [];
  productId: string = '';

  constructor(
    private store: Store<{
      product: ProductState,
      auth: AuthState,
    }>,
  ) {

    this.idToken$ = this.store.select('auth', 'IdToken');
  }

  deleteProductForm = new FormGroup({
    id: new FormControl('')

  })

  deleteProduct() {
    if (this.deleteProductForm.valid) {
      const id = this.deleteProductForm.value.id || '';
      console.log('Product deleted with ID:');
      this.store.dispatch(ProductActions.deleteProduct({productId:id, idToken: this.idToken}));
    } else {
      console.error('Form is invalid');
    }
  }

  ngOnInit() {
    this.subscriptions.push(
      this.idToken$.subscribe((idToken:string) => {
        if (idToken) {
          this.idToken = idToken;
        }
      }),
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });

  }
}

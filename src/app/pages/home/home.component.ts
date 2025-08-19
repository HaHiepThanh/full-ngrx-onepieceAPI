import {Component, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';
import {CharacterState} from '../../ngrx/onepiece/onepiece.state';
import {Store} from '@ngrx/store';
import {CharacterItemModel} from '../../module/characterItem.model';
import {Observable, Subscription} from 'rxjs';
import * as OnePieceActions from '../../ngrx/onepiece/onepiece.actions';
import * as ProductActions from '../../ngrx/product/product.actions'
import * as AuthActions from '../../ngrx/auth/auth.actions';
import {MatButton} from '@angular/material/button';
import {AsyncPipe, DecimalPipe} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {Router} from '@angular/router';
import {Auth} from '@angular/fire/auth';
import {AuthState} from '../../ngrx/auth/auth.state';
import {ProductService} from '../../service/product/product.service';
import {ProductModel} from '../../module/product.model';
import {ProductState} from '../../ngrx/product/product.state';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {AuthService} from '../../service/auth/auth.service';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';

registerLocaleData(localeVi);
@Component({
  selector: 'app-home',
  imports: [
    MatProgressSpinnerModule,
    AsyncPipe,
    MatIconModule,
    ReactiveFormsModule,
    DecimalPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [
    { provide: LOCALE_ID, useValue: 'vi' }
  ]
})
// export class HomeComponent implements OnInit ,OnDestroy{
//
//   onePieceList$!: Observable<CharacterItemModel[]>;
//   subscriptions: Subscription[] = [];
//   isLoading$!: Observable<boolean>;
//   productList$!: Observable<ProductModel[]>;
//   IdToken$!: Observable<string>;
//
//   constructor(
//     private store:Store<{
//       character: CharacterState,
//       auth: AuthState,
//       product: ProductState,
//     }>,
//     private router: Router,
//     private productService: ProductService,
//   ) {
//     // this.onePieceList$ = this.store.select('character', 'characterList');
//     // this.isLoading$ = this.store.select('character', 'isLoading');
//     // this.getCharacters();
//     // this.productService.getAllProducts();
//     this.productList$ = this.store.select('product', 'productList');
//     // this.store.dispatch(ProductActions.getAllProducts());
//     this.IdToken$ = this.store.select('auth','IdToken')
//     console.log(this.IdToken$)
//   }
//
//   ngOnDestroy(): void {
//    this.subscriptions.forEach(subscription => subscription.unsubscribe());
//   }
//
//   ngOnInit(): void {
//     this.subscriptions.push(
//       // this.onePieceList$.subscribe((character: CharacterItemModel[]) => {
//       //   console.log(character);
//       // }),
//
//       this.productList$.subscribe((product: ProductModel[]) => {
//         if (product.length > 0) {
//           console.log(product);
//         }else{
//           console.log('No products found');
//         }
//       }),
//
//       this.IdToken$.subscribe((IdToken:string) => {
//         console.log(IdToken);
//       })
//     )
//   }
//
//   productForm = new FormGroup({
//     id: new FormControl(''),
//     name: new FormControl(''),
//     description: new FormControl(''),
//     price: new FormControl(0),
//     image: new FormControl(''),
//   });
//
//   addProduct(){
//     if (this.productForm.valid){
//       const newProduct: ProductModel = {
//         id: this.productForm.value.id || '',
//         name: this.productForm.value.name || '',
//         description: this.productForm.value.description || '',
//         price: this.productForm.value.price || 0,
//         image: this.productForm.value.image || '',
//       };
//       console.log(newProduct);
//       this.store.dispatch(ProductActions.createProduct({product: newProduct}));
//       this.productForm.reset();
//     }else{
//       console.log('Form is invalid');
//     }
//   }
//
//   getCharacters() {
//     this.store.dispatch(OnePieceActions.getAllOnepieceCharacters());
//   }
//
//   navigateToDetail(id: number){
//     this.router.navigate(['/detail', id]).then();
//   }
//
//
// }

export class HomeComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  characterList$ !: Observable<CharacterItemModel[]>;
  isLoading$ !: Observable<boolean>;
  currentUser$ !: Observable<any>;
  idToken$ !: Observable<string>;
  productsList$ !: Observable<ProductModel[]>;
  idToken: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private productService: ProductService,
    private store: Store<{
      character: CharacterState
      auth: AuthState,
      product: ProductState
    }>
  ) {
    // this.isLoading$ = this.store.select("character",'isLoading')
    // this.characterList$ = this.store.select('character', 'characterList')
    // this.currentUser$ = this.store.select('auth', 'currentUser')
    this.idToken$ = this.store.select('auth', 'IdToken')
    // this.getCharacter()
    this.productsList$ = this.store.select('product', 'productList');
  }


  ngOnInit() {
    this.subscriptions.push(
      // this.characterList$.subscribe((character: CharacterModel) => {
      //
      //   console.log(character);
      // }),
      //
      // this.currentUser$.subscribe((user)=>{
      //   if (user) {
      //     console.log(user);
      //   }
      // }),
      //
      this.idToken$.subscribe((idToken:string) => {
        if (idToken) {
          this.idToken = idToken
        }
      }),

      this.productsList$.subscribe((products: ProductModel[]) => {
        if (products.length > 0) {
          console.log(products);
        } else {
          console.log('No products found');
        }
      })
    )
    // if(this.idToken !== ''){
    // }

  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    // this.store.dispatch(CharacterActions.resetCharacterList());
    // this.store.dispatch(ProductActions.resetProductList());
  }

  getCharacter(){
    this.store.dispatch(OnePieceActions.getAllOnepieceCharacters())
  }

  navigateToDetail(id: string){
    this.router.navigate(['/detail',id]).then()
  }

  // loginWithGoogle() {
  //   this.store.dispatch(AuthActions.login())
  // }
  //
  // logout() {
  //   this.store.dispatch(AuthActions.logout())
  // }

}

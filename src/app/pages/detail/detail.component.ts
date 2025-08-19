import {Component, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router, RouterOutlet} from '@angular/router';
import {Store} from '@ngrx/store';
import {CharacterState} from '../../ngrx/onepiece/onepiece.state';
import {CharacterItemModel} from '../../module/characterItem.model';
import {Observable, Subscription} from 'rxjs';
import * as CharacterActions from '../../ngrx/onepiece/onepiece.actions';
import {AsyncPipe, DecimalPipe, NgClass} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import * as ProductActions from '../../ngrx/product/product.actions';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {ProductState} from '../../ngrx/product/product.state';
import {ProductModel} from '../../module/product.model';
import {AuthState} from '../../ngrx/auth/auth.state';
import {idToken} from '@angular/fire/auth';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import {MatIconModule} from '@angular/material/icon';

registerLocaleData(localeVi);
@Component({
  selector: 'app-detail',
  imports: [
    AsyncPipe,
    MatProgressSpinnerModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    NgClass,
    MatButton,
    RouterOutlet,
    DecimalPipe,
    MatIconModule
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  providers: [
    { provide: LOCALE_ID, useValue: 'vi' }
  ]
})
export class DetailComponent implements OnInit ,OnDestroy {

  characterDetail$!: Observable<CharacterItemModel>;
  subscriptions: Subscription[] = [];
  // isLoading$!: Observable<boolean>;
  productDetail$ !: Observable<ProductModel>;
  idToken$ !: Observable<string>;
  idToken!: string;
  productId: string = '';
  productDetail!: ProductModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private store:Store<{
      character: CharacterState,
      product: ProductState,
      auth: AuthState,
    }>
  ){
    let {id} = this.activatedRoute.snapshot.params;
    console.log('Product ID:', id);
    // this.characterDetail$ = this.store.select('character', 'characterDetail');
    // this.isLoading$ = this.store.select('character', 'isLoading');
    // this.store.dispatch(CharacterActions.getOnepieceCharacterById({id:id}));
    this.productId = id;
    this.idToken$ = this.store.select('auth', 'IdToken');
    this.productDetail$ = this.store.select('product', 'productDetail');

  }

  ngOnInit() {
    this.subscriptions.push(
      // this.characterDetail$.subscribe((character:CharacterItemModel)=>{
      //   console.log(character);
      // }),

      this.productDetail$.subscribe((product:ProductModel) =>{
        this.productDetail = product
      }),

      this.idToken$.subscribe((idToken:string) =>{
        if (idToken){
          this.idToken = idToken;
          this.store.dispatch(ProductActions.getProductDetail({productId:this.productId,idToken:this.idToken }))
        }

      }),

    )

  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  navigateToHome() {
    this.router.navigate(['/home']).then();
  }


}

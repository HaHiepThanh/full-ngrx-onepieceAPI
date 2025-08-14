import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as CharacterActions from './onepiece.actions';
import {inject} from '@angular/core';
import {OnePieceService} from '../../service/onePiece/one-piece.service';
import {catchError, map, of, switchMap} from 'rxjs';

export const characterEffects = createEffect(
  (action$ = inject(Actions), onePieceService = inject(OnePieceService)) =>{
    return action$.pipe(
      ofType(CharacterActions.getAllOnepieceCharacters),
      switchMap(()=>
      onePieceService.getAllCharacters().pipe(
        map((character)=>CharacterActions.getAllOnepieceCharactersSuccess({characterList: character})),
        catchError((error: {error: any}) =>
        of(CharacterActions.getAllOnepieceCharactersFailure({error: error})),)
      )
      )
    )
  },
{functional:true}
)

export const characterByIdEffects = createEffect(
  (action$ = inject(Actions), onePieceService = inject(OnePieceService)) => {
    return action$.pipe(
      ofType(CharacterActions.getOnepieceCharacterById),
      switchMap((action) =>
        onePieceService.getCharacterById(action.id).pipe(
        map((characterDetail)=> CharacterActions.getOnepieceCharacterByIdSuccess({characterDetail: characterDetail})),
          catchError((error: {error: any}) =>
          of(CharacterActions.getOnepieceCharacterByIdFailure({error: error})),)
      ))
    )
  },
{functional: true}
)

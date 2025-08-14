import * as CharacterActions from './onepiece.actions';
import {CharacterState} from './onepiece.state';
import {CharacterItemModel} from '../../module/characterItem.model';
import {createReducer, on} from '@ngrx/store';


export const initialState: CharacterState = {
  characterList: <CharacterItemModel[]>[],
  characterDetail: <CharacterItemModel>{},
  isLoading: false,
  error: null,
}

export const characterReducer = createReducer(
  initialState,

  on(CharacterActions.getAllOnepieceCharacters, (state, {type})=>{
    console.log(type);
    return{
      ...state,
      isLoading: true,
    }
  }),

  on(CharacterActions.getAllOnepieceCharactersSuccess, (state, {type, characterList})=>{
    console.log(type);
    return {
      ...state,
      characterList: characterList,
      isLoading: false,
      error: null,
    }
  }),

  on(CharacterActions.getAllOnepieceCharactersFailure, (state, {type, error})=>{
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error,
    }
  }),

  on(CharacterActions.getOnepieceCharacterById, (state, {type, id})=>{
    console.log(type);
    return {
      ...state,
      isLoading: true,
    }
  }),

  on(CharacterActions.getOnepieceCharacterByIdSuccess, (state, {type, characterDetail})=>{
    console.log(type);
    return {
      ...state,
      characterDetail: characterDetail,
      isLoading: false,
      error: null,
    }
  }),

  on(CharacterActions.getOnepieceCharacterByIdFailure, (state, {type, error})=>{
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error,
    }
  })

)


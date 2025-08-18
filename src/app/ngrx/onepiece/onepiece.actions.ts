import {createAction, props} from '@ngrx/store';
import {CharacterItemModel} from '../../module/characterItem.model';

export const getAllOnepieceCharacters = createAction(
  '[Onepiece] getAllOnepieceCharacters'
)

export const getAllOnepieceCharactersSuccess = createAction(
  '[Onepiece] getAllOnepieceCharactersSuccess', props<{characterList:CharacterItemModel[]}>()
)

export const getAllOnepieceCharactersFailure = createAction(
  '[Onepiece] getAllOnepieceCharactersFailure', props<{error: any}>()
)


export const getOnepieceCharacterById = createAction(
  '[Onepiece] getOnepieceCharacterById', props<{id: string}>()
)

export const getOnepieceCharacterByIdSuccess = createAction(
  '[Onepiece] getOnepieceCharacterByIdSuccess', props<{characterDetail: CharacterItemModel}>()
)

export const getOnepieceCharacterByIdFailure = createAction(
  '[Onepiece] getOnepieceCharacterByIdFailure', props<{error: any}>()
)


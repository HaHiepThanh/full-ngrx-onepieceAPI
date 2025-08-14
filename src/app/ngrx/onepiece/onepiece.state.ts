import {CharacterItemModel} from '../../module/characterItem.model';

export interface CharacterState {
  characterList: CharacterItemModel[];
  characterDetail: CharacterItemModel;
  isLoading: boolean;
  error: any;
}

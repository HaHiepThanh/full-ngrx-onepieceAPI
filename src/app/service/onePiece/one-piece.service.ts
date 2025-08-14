import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CharacterItemModel} from '../../module/characterItem.model';

@Injectable({
  providedIn: 'root'
})
export class OnePieceService {

  constructor(
    private http: HttpClient,
  ) {

  }

  getAllCharacters() {
    return this.http.get<CharacterItemModel[]>('https://api.api-onepiece.com/v2/characters/en');
  }

  getCharacterById(id: string) {
    return this.http.get<CharacterItemModel>(`https://api.api-onepiece.com/v2/characters/en/${id}`);
  }


}

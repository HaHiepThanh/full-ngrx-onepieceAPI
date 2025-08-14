import {CrewModel} from './crew.model';
import {FruitModel} from './fruit.model';

export interface CharacterItemModel{
  id: number;
  name: string;
  size: string;
  age: string;
  bounty: string;
  crew?: CrewModel;
  fruit?: FruitModel;
  job: string;
  status: string;
}

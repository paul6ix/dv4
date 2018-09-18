import {PlaceLocation} from './PlaceLocation';
import {TastingRating} from './TastingRating';

export class AppModel {
  // app properties
  _id : string;
  type: string;
  notes: string;
  rating: number;
  tastingrating: TastingRating;

  constructor(public name: string="", public place: string="", public location:PlaceLocation=null) {
    this.location = new PlaceLocation();
  }

}


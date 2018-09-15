import {Injectable} from '@angular/core';
import {PlaceLocation} from './model/PlaceLocation';
import {AppModel} from './model/logic';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  getDataList(callback) {
    //TODO: add webservice

    const list = [
      new AppModel('Nescafe', 'NeoCafe', new PlaceLocation('Hubmart', 'Lekki phase one')),
      new AppModel('Cowbell coffee', 'HardRock Cafe', new PlaceLocation('LandMark event center', 'lagos nigeria'))
    ];
callback(list);
  }

  save(coffee, callback) {
    //fixme: add webservice
    callback(true);
  }
}

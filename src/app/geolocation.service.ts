import {Injectable} from '@angular/core';
import {PlaceLocation} from './model/PlaceLocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() {
  }

  requestLocation(callback) {
    //location api
    navigator.geolocation.getCurrentPosition(position => {
        callback(position.coords);
      }, error => {
        callback(null);
      }
    );
  }

  getMapLink(location: PlaceLocation) {
    //universal api
    let query = '';
    if (location.lat) {
      query = location.lat + ',' + location.lng;
    }
    else {
      query = `${location.address},${location.city} `;
    }
    if (/ipad|iphone|ipod/.test(navigator.userAgent)) {
      return `http://maps.apple.com/?q=${query}`;
    }
    else {
      return `http://map.google.com/?q=${query}`;
    }

  }
}

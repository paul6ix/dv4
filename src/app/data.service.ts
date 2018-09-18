import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public apiUrl = 'http://localhost:5000/tip';

  constructor(private http: Http) {
  }

  getOne(tipsId: String, callback) {
    this.http.get(`${this.apiUrl}/${tipsId}`).subscribe(response => {
      callback(response.json());
    });
  }

  getDataList(callback) {
    //getting data from the api
    /*const list = [
      new AppModel('Nescafe', 'NeoCafe', new PlaceLocation('Hubmart', 'Lekki phase one')),
      new AppModel('Cowbell coffee', 'HardRock Cafe', new PlaceLocation('LandMark event center', 'lagos nigeria'))
    ];
callback(list);*/
    this.http.get(this.apiUrl).subscribe(response => {
      callback(response.json());
      console.log(response.json());
    });
  }

  save(tip, callback) {
    //saving to the api
    if (tip._id) {
      let updateUrl = `${this.apiUrl}/${tip._id}`;
      this.http.put(updateUrl, tip).subscribe(response => {
        callback(true);
      });
    }
    else {
      let postUrl = `${this.apiUrl}`;
      this.http.post(postUrl, tip).subscribe(response => {
        callback(true);
      });
    }
  }
}

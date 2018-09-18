import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {AppModel} from '../model/logic';
import {Router} from '@angular/router';
import {GeolocationService} from '../geolocation.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
//declaring and registering services to be used
  constructor(private listData: DataService, private router: Router, private geolocation: GeolocationService) {
  }

// binding model to the front end
  tipsList: [AppModel];

//method to edit post data from the frontend
  editDetails(tips: AppModel) {
    this.router.navigate(['/tips', tips._id]);
  }

  //method to open map from the frontend
  openMap(tips: AppModel) {
    location.href = this.geolocation.getMapLink(tips.location);

  }

  //method to share post from the frontend
  share(tips: AppModel) {
    if ('share' in navigator) {
      (navigator as any).share({
        title: tips.name,
        text: tips.notes,
        url: window.location.href
      }).then(()=> console.log("shared")).catch(()=>console.log("error"));
    } else {
 location.href = "https://twitter.com/intent/tweet?url=<?=urlencode($url)?>"
    }
  }

//loading data from model and database on load
  ngOnInit() {
    this.listData.getDataList(data => {
      this.tipsList = data;
    });
  }

}

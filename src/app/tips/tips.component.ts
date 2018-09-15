import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AppModel} from '../model/logic';
import {GeolocationService} from '../geolocation.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private geolocation: GeolocationService) {
  }

  routingSubscription: any;
  tips: AppModel;
  types = ['Premium', 'Free', 'Platinum'];

  ngOnInit() {
    this.tips = new AppModel();
    this.routingSubscription = this.route.params.subscribe(params => {
      console.log(params['id']);
    });
    this.geolocation.requestLocation(location => {
      if (location) {
        this.tips.location.lat = location.lat;
        this.tips.location.lng = location.lng;
      }
    });
  }
save(){

}
cancel(){

}
  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}

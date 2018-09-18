import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppModel} from '../model/logic';
import {GeolocationService} from '../geolocation.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private geolocation: GeolocationService, private router: Router, private data: DataService) {
  }

  routingSubscription: any;
  tips: AppModel;
  types = ['Premium', 'Free', 'Platinum'];

  ngOnInit() {
    this.tips = new AppModel();
    this.routingSubscription = this.route.params.subscribe(params => {
      console.log(params['id']);
      if (params["id"]){
        this.data.getOne(params["id"],response=>{
          this.tips = response;
        })
      }
    });
    this.geolocation.requestLocation(location => {
      if (location) {
        this.tips.location.lat = location.lat;
        this.tips.location.lng = location.lng;
      }
    });
  }
save(){
  this.data.save(this.tips,result=>{
    if (result){
      this.router.navigate(['/']);
    }
  })

}
cancel(){
  this.router.navigate(['/']);
}
  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}

import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {AppModel} from '../model/logic';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listData: DataService) {
  }

  tipsList: [AppModel];

  ngOnInit() {
    this.listData.getDataList(data => {
      this.tipsList = data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoDataService } from '../../Services/videoData.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DomSanitizer } from '@angular/platform-browser';
import { TrainingModuleData } from '../traininmodule.class';

@Component({
  selector: 'app-Java',
  templateUrl: './Java.component.html',
  
})
export class JavaComponent {
  videoList: any[];
  param1: string;
  videodata1: any[];
  constructor(private dom: DomSanitizer, private db: AngularFireDatabase,
    private router: Router, private dataService: VideoDataService, private route: ActivatedRoute) {
    this.dataService.getVideoData().snapshotChanges().subscribe(item => {
      this.videoList = [];
      console.log(this.videoList);
      item.forEach(element => {
        const x = element.payload.toJSON();
        x['$key'] = element.key;
        this.videoList.push(x);
        console.log(this.videoList);
      });
      this.param1 = this.route.snapshot.paramMap.get('name');
        this.videodata1 = [];
        this.videoList.forEach(v => {
          if (v.name === this.param1) {
            this.videodata1.push(v);
            console.log(this.videodata1);
          }
        });
    });
  }
}  

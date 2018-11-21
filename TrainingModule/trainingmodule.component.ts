import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { UserService } from "../Services/user.service";
import { AngularFireAuth } from "angularfire2/auth";
import * as Firebase from "firebase/app";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { TrainingModuleData } from "./traininmodule.class";
import { VideoDataService } from "../Services/videoData.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "@firebase/util";

@Component({
  templateUrl: "trainingmodule.component.html"
})
export class TrainingModuleComponent {
  videoList: any[];
  userList: any[] = [];
  param1: string;
  videodata: any[];
  user: Observable<Firebase.User>;
  authenticated = false;
  name: string;
  email: string;
  enabled = false;
  key: string;
  userDetails: any[];
  filter_List: any[];

  constructor(
    private dom: DomSanitizer,
    private db: AngularFireDatabase,
    private af: AngularFireAuth,
    private router: Router,
    private dataService: VideoDataService,
    private route: ActivatedRoute
  ) {
    this.af.authState.subscribe(auth => {
      if (auth != null) {
        this.name = auth.displayName;
        console.log(this.name);
        localStorage.setItem("username", this.name);
        localStorage.setItem("useremail", this.email);
        this.authenticated = true;
      }
      this.getUserDetails();
    });
    this.dataService
      .getVideoData()
      .snapshotChanges()
      .subscribe(item => {
        this.videoList = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x["$key"] = element.key;
          this.videoList.push(x);
        });
        console.log(this.videoList);
      });
  }
  getUserDetails() {
    this.dataService
      .getuserData()
      .snapshotChanges()
      .subscribe(item => {
        this.userDetails = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x["$key"] = element.key;
          this.userDetails.push(x);
        });
        console.log(this.userDetails);
        this.videoList.forEach(v => {
          if (v.ownership === this.name) {
            console.log(v.name);
            console.log(v.ownership);
            this.enabled = true;
          }
          const filterList = this.userDetails.filter(
            a => a.Id === v.$key && a.username === this.name
          );
          if (filterList.length > 0) {
            v.Completed = filterList[0].Completed;
          }
        });
      });
  }
  saveUserPreference($key, Completed) {
    const existData = this.userDetails.filter(
      a => a.username === this.name && a.Id === $key
    );
    if (existData.length > 0) {
      this.dataService.UpdateuserDataList(existData[0].$key, !Completed);
    } else {
      this.db
        .list(`/userDetails/`)
        .push({ username: this.name, Completed: !Completed, Id: $key });
    }
  }
  Training(item: string) {
    this.router.navigate(["/training/" + item + "/" + item]);
  }
  CheckboxCheck($key: string, Completed: boolean) {
    this.dataService.UpdateVideoList($key, !Completed);
  }
  Modify(item: string) {
    this.router.navigate(["/admin/" + item]);
    console.log(item);
    this.key = this.route.snapshot.paramMap.get('key');
    const filter_List = this.videoList.filter(
      v => v.username === this.name
    );
    console.log(filter_List);
    if (filter_List.length > 0) {
      console.log(filter_List[0].embed);
      console.log(filter_List[0].embed1);
      console.log(filter_List[0].embed2);
    }
  }
  Delete(item: string) {
    this.dataService.removeData(item);
  }
}

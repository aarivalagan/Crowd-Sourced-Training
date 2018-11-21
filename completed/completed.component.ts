import { Component } from "@angular/core";
import { VideoDataService } from "../Services/videoData.service";

@Component({
  selector: "app-completed",
  templateUrl: "./completed.component.html",
  styleUrls: ["./completed.component.css"]
})
export class CompletedComponent {
  videoList: any = [];
  userDetails: any[];
  userScoreData: any;
  constructor(private dataService: VideoDataService) {
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
        this.getUserDetails();
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
          const filterList = this.userDetails.filter(
            a =>
              a.Id === v.$key && a.username === localStorage.getItem("username")
          );
          if (filterList.length > 0) {
            v.Completed = filterList[0].Completed;
          }
        });
        this.getUserScoreDetails();
      });
  }
  getUserScoreDetails() {
    this.dataService
      .getUserScoreData()
      .snapshotChanges()
      .subscribe(item => {
        this.userScoreData = [];
        item.forEach(element => {
          const x = element.payload.toJSON();
          x["$key"] = element.key;
          this.userScoreData.push(x);
        });
        console.log(this.userScoreData);
        this.videoList.forEach(v => {
          const filterList = this.userScoreData.filter(
            a =>
              a.Id === v.$key && a.username === localStorage.getItem("username")
          );
          if (filterList.length > 0) {
            v.score = filterList[0].score;
          }
        });
      });
  }
}

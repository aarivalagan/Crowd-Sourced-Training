import { Component } from "@angular/core";
import { VideoDataService } from "../Services/videoData.service";

@Component({
  selector: "app-currentwork",
  templateUrl: "./currentwork.component.html",
  styleUrls: ["./currentwork.component.css"]
})
export class CurrentworkComponent {
  videoList: any = [];
  userDetails: any[];
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
            a => a.Id === v.$key && a.username === localStorage.getItem("username")
          );
          if (filterList.length > 0) {
            v.Completed = filterList[0].Completed;
          }
        });
      });
  }
}

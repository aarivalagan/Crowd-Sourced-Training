import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { VideoDataService } from "../Services/videoData.service";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { TrainingModuleData } from "../TrainingModule/traininmodule.class";

@Component({
  selector: "app-quizzes",
  templateUrl: "./quizzes.component.html",
  styleUrls: ["./quizzes.component.css"]
})
export class QuizzesComponent {
  param: string;
  newData: any = [];
  videoList: any = [];
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
  q9: string;
  q10: string;
  score: number = 0;
  filterData: AngularFireList<any>;
  filterdData: any = [];
  items: AngularFireList<TrainingModuleData[]>;
  item: TrainingModuleData = new TrainingModuleData();
  test: TrainingModuleData[] = [];
  isUpdate: boolean;
  key = "";
  userScoreData: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private dataService: VideoDataService
  ) {
    this.filterData = this.db.list("/newCourse");
    this.items = this.db.list("/newCourse");
    this.dataService
      .getVideoData()
      .snapshotChanges()
      .subscribe(item => {
        item.forEach(element => {
          const x = element.payload.toJSON();
          console.log(x);
          x["$key"] = element.key;
          this.videoList.push(x);
          console.log(this.videoList);
          // this.param = this.route.snapshot.paramMap.get('name');
          // this.filterdData = [];
          // this.videoList.forEach(v => {
          //   if (v.name === this.param) {
          //     this.filterdData.push(v);
          //   }
          // });
        });
        this.getUserDetails();
      });
  }
  getUserDetails() {
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
        this.param = this.route.snapshot.paramMap.get("name");
        this.filterdData = [];
        this.videoList.forEach(v => {
          if (v.name === this.param) {
            this.filterdData.push(v);
            console.log(this.filterdData);
            console.log(this.filterdData[0].answer1);
          }
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
  SubmitClick($key: string) {
    if (this.q1 !== undefined) {
      console.log(this.q1);
      if (this.filterdData[0].answer1 === this.q1) {
        this.filterData.update($key, { isQCompleted: true });
        this.score += 1;
        console.log(this.filterdData[0].answer1);
        //console.log(Object.values(this.filterdData[0]));
        //this.router.navigate(['/training']);
      }
    }
    if (this.q2 !== undefined) {
      console.log(this.q2);
      if (this.filterdData[0].answer2 === this.q2) {
        this.filterData.update($key, { isQCompleted: true });
        this.score += 1;
        console.log(this.filterdData[0].answer2);
        //console.log(Object.values(this.filterdData[0]));
        //this.router.navigate(['/training']);
      }
      //alert('correct');
    }
    if (this.q3 !== undefined) {
      console.log(this.q3);
      if (this.filterdData[0].answer3 === this.q3) {
        this.filterData.update($key, { isQCompleted: true });
        this.score += 1;
        console.log(this.filterdData[0].answer3);
        //console.log(Object.values(this.filterdData[0]));
        //this.router.navigate(['/training']);
      }
      //alert('correct');
    }
    if (this.q4 !== undefined) {
      console.log(this.q4);
      if (this.filterdData[0].answer4 === this.q4) {
        this.filterData.update($key, { isQCompleted: true });
        this.score += 1;
        console.log(this.filterdData[0].answer4);
        //console.log(Object.values(this.filterdData[0]));
        //this.router.navigate(['/training']);
      }
      //alert('correct');
    }
    if (this.q5 !== undefined) {
      console.log(this.q5);
      if (this.filterdData[0].answer5 === this.q5) {
        this.filterData.update($key, { isQCompleted: true });
        this.score += 1;
        console.log(this.filterdData[0].answer5);
        //console.log(Object.values(this.filterdData[0]));
        //this.router.navigate(['/training']);
      }
      //alert('correct');
    }
    if (this.q6 !== undefined) {
      console.log(this.q6);
      if (this.filterdData[0].answer6 === this.q6) {
        this.filterData.update($key, { isQCompleted: true });
        this.score += 1;
        console.log(this.filterdData[0].answer6);
        //console.log(Object.values(this.filterdData[0]));
        //this.router.navigate(['/training']);
      }
      //alert('correct');
    }
    if (this.q7 !== undefined) {
      console.log(this.q7);
      if (this.filterdData[0].answer7 === this.q7) {
        this.filterData.update($key, { isQCompleted: true });
        this.score += 1;
        console.log(this.filterdData[0].answer7);
        //console.log(Object.values(this.filterdData[0]));
        //this.router.navigate(['/training']);
      }
      //alert('correct');
    }
    if (this.q8 !== undefined) {
      console.log(this.q8);
      if (this.filterdData[0].answer8 === this.q8) {
        this.filterData.update($key, { isQCompleted: true });
        this.score += 1;
        console.log(this.filterdData[0].answer8);
        //console.log(Object.values(this.filterdData[0]));
        //this.router.navigate(['/training']);
      }
      //alert('correct');
    }
    if (this.q9 !== undefined) {
      console.log(this.q9);
      if (this.filterdData[0].answer9 === this.q9) {
        this.filterData.update($key, { isQCompleted: true });
        this.score += 1;
        console.log(this.filterdData[0].answer9);
        //console.log(Object.values(this.filterdData[0]));
        //this.router.navigate(['/training']);
      }
      //alert('correct');
    }
    if (this.q10 !== undefined) {
      console.log(this.q10);
      if (this.filterdData[0].answer10 === this.q10) {
        this.filterData.update($key, { isQCompleted: true });
        this.score += 1;
        console.log(this.filterdData[0].answer10);
        //console.log(Object.values(this.filterdData[0]));
        //this.router.navigate(['/training']);
      }
      //alert('correct');
    }
    //if ((this.filterdData[0].answer1 === this.q1) && (this.filterdData[0].answer2 === this.q2) && (this.filterdData[0].answer3 === this.q3) && (this.filterdData[0].answer4 === this.q4)) {
    //this.filterData.update($key, { isQCompleted: true });
    //localStorage.setItem("Score",this.filterData[0].Score.toString());
    alert("Congrats for Completing the quiz .Your Score is : " + this.score);
    this.filterData.update($key, { isQCompleted: true });
    this.filterdData[0].Score = this.score;
    this.key = this.route.snapshot.paramMap.get("key");
    console.log(this.key);

    const existData = this.userScoreData.filter(
      a => a.username === localStorage.getItem("username") && a.Id === $key
    );
    this.filterData.update($key, { isQCompleted: true });
    if (existData.length > 0) {
      this.dataService.updateScoreDetails(existData[0].$key, this.score);
    } else {
      this.db.list(`/userScoreData/`).push({
        username: localStorage.getItem("username"),
        score: this.score,
        Id: $key
      });
    }
  }
}

import { Component } from "@angular/core";
import { VideoDataService } from "../Services/videoData.service";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.css"]
})
export class ProgressComponent {
  trainingpen = 0;
  trainingCom = 0;
  quizPending = 0;
  quizCounter = 0;
  videoList: any = [];
  completed_course: any = [];
  pending_course: any = [];
  completed_course_quiz: any = [];
  pending_course_quiz: any = [];
  course1: string;
  course2: string;
  course3: string;
  course4: string;
  completedCourse: boolean = false;
  pendingCourse: boolean = false;
  completedCourseQuiz: boolean = false;
  pendingCourseQuiz: boolean = false;
  userDetails: any[];

  constructor(private dataService: VideoDataService) {
    this.trainingCom = 0;
    this.trainingpen = 0;
    this.quizCounter = 0;
    this.quizPending = 0;
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
          v.Completed ? this.trainingCom++ : this.trainingpen++;
          v.isQCompleted ? this.quizCounter++ : this.quizPending++;
          if (!v.Completed) {
            this.pending_course.push(v.name);
          } else {
            this.completed_course.push(v.name);
          }
          if (!v.isQCompleted) {
            this.pending_course_quiz.push(v.name);
          } else {
            this.completed_course_quiz.push(v.name);
          }
        });
      });
  }
  //course_Completed(){
  //this.completed_course.forEach(element => {
  //if()
  //});
  //}
  //course_Completed(){
  //<div *ngFor='let course of completed_course'>
  //<li> >{{ course }}</li>
  //</div>
  //}
  course_Completed() {
    this.completed_course.forEach(element => {
      this.course1 = this.completed_course;
      console.log("hello");
      console.log(this.course1);
      this.completedCourse = true;
    });
    //}
    //this.course =this.completed_course.name
  }
  course_Pending() {
    this.pending_course.forEach(element => {
      this.course2 = this.pending_course;
      console.log("hello");
      console.log(this.course2);
      this.pendingCourse = true;
    });
  }
  course_Completed_Quiz() {
    this.completed_course_quiz.forEach(element => {
      this.course3 = this.completed_course_quiz;
      console.log("hello");
      console.log(this.course3);
      this.completedCourseQuiz = true;
    });
    //}
    //this.course =this.completed_course.name
  }
  course_Pending_Quiz() {
    this.pending_course_quiz.forEach(element => {
      this.course4 = this.pending_course_quiz;
      console.log("hello");
      console.log(this.course4);
      this.pendingCourseQuiz = true;
      //return this.course4;
    });
  }
}

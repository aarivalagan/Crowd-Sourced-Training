import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import { catchError } from "rxjs/operators";

@Injectable()
export class VideoDataService {
  constructor(private db: AngularFireDatabase, private http: HttpClient) {}
  videoList: AngularFireList<any>;
  userData: AngularFireList<any>;
  userScoreData: AngularFireList<any>;
  removeData($key: string) {
    this.videoList.remove($key);
  }
  getVideoData(): any {
    this.videoList = this.db.list("/newCourse");
    console.log("test", this.videoList);
    return this.videoList;
  }
  getuserData(): any {
    this.userData = this.db.list("/userDetails");
    console.log("userData", this.userData);
    return this.userData;
  }
  UpdateCompleteVideoList($key: string, value: string) {
    this.videoList.update($key, { score: value });
  }
  UpdateVideoList($key: string, flag: boolean) {
    this.videoList.update($key, { Completed: flag });
  }
  UpdateuserDataList($key: string, flag: boolean) {
    this.userData.update($key, { Completed: flag });
  }
  getUserScoreData() {
    this.userScoreData = this.db.list("/userScoreData");
    console.log("userScoreData", this.userScoreData);
    return this.userScoreData;
  }
  updateScoreDetails($key: string, flag: number) {
    this.userScoreData.update($key, { score: flag });
  }
  uploadFile(file) {
    let formData: FormData = new FormData();
    formData.append("file", file, file.name);

    this.http.post("http://localhost:/4200/", formData);
  }

  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = "your-destination-url";
    const formData: FormData = new FormData();
    formData.append("fileKey", fileToUpload, fileToUpload.name);
    return (
      this.http
        //.post(endpoint, formData, {  }).subscribe()
        //.map(() => { return true; })
        //.catchError((e) => this.handleError(e));
        .post(endpoint, formData)
        .map(() => {
          return true;
        })
    );
  }
}

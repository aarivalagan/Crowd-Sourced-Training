import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask
} from 'angularfire2/storage';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray
} from '@angular/forms';
import { TrainingModuleData } from '../TrainingModule/traininmodule.class';
import { QuizData } from '../TrainingModule/traininmodule.class';
import { DocData } from '../TrainingModule/traininmodule.class';
import { VideoDataService } from '../Services/videoData.service';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './admin.component.html',
  providers: [VideoDataService, AngularFireStorage]
})
export class AdminComponent {
  videoForm: FormGroup;
  Quiz_Form: FormGroup;
  Doc_Form: FormGroup;
  items: AngularFireList<TrainingModuleData[]>;
  item: TrainingModuleData = new TrainingModuleData();
  test: TrainingModuleData[] = [];
  items1: AngularFireList<QuizData[]>;
  item1: QuizData = new QuizData();
  test1: QuizData[] = [];
  items2: AngularFireList<DocData[]>;
  item2: DocData = new DocData();
  test2: DocData[] = [];
  fileToUpload: File = null;
  fileUploadService;
  videoList: any[];
  isUpdate: boolean;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: any;
  ref1: AngularFireStorageReference;
  task1: AngularFireUploadTask;
  uploadProgress1: Observable<number>;
  downloadURL1: any;
  ref2: AngularFireStorageReference;
  task2: AngularFireUploadTask;
  uploadProgress2: Observable<number>;
  downloadURL2: any;
  key = '';

  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dataService: VideoDataService,
    private afStorage: AngularFireStorage
  ) {
    this.createForm();
    this.QuizForm();
    this.readingparam();
    this.DocForm();
    this.items = this.db.list('/newCourse');
    this.items1 = this.db.list('/newCourse1');
    this.items2 = this.db.list('/newCourse2');
  }
  createForm() {
    this.videoForm = this.fb.group({
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
      question4: ['', Validators.required],
      question5: ['', Validators.required],
      question6: ['', Validators.required],
      question7: ['', Validators.required],
      question8: ['', Validators.required],
      question9: ['', Validators.required],
      question10: ['', Validators.required],
      name: ['', Validators.required],
      URL: ['', Validators.required],
      URL1: ['', Validators.required],
      URL2: ['', Validators.required],
      embed: ['', Validators.required],
      embed1: ['', Validators.required],
      embed2: ['', Validators.required],
      Opta1: ['', Validators.required],
      Optb1: ['', Validators.required],
      Optc1: ['', Validators.required],
      Optd1: ['', Validators.required],
      Opta2: ['', Validators.required],
      Optb2: ['', Validators.required],
      Optc2: ['', Validators.required],
      Optd2: ['', Validators.required],
      Opta3: ['', Validators.required],
      Optb3: ['', Validators.required],
      Optc3: ['', Validators.required],
      Optd3: ['', Validators.required],
      Opta4: ['', Validators.required],
      Optb4: ['', Validators.required],
      Optc4: ['', Validators.required],
      Optd4: ['', Validators.required],
      Opta5: ['', Validators.required],
      Optb5: ['', Validators.required],
      Optc5: ['', Validators.required],
      Optd5: ['', Validators.required],
      Opta6: ['', Validators.required],
      Optb6: ['', Validators.required],
      Optc6: ['', Validators.required],
      Optd6: ['', Validators.required],
      Opta7: ['', Validators.required],
      Optb7: ['', Validators.required],
      Optc7: ['', Validators.required],
      Optd7: ['', Validators.required],
      Opta8: ['', Validators.required],
      Optb8: ['', Validators.required],
      Optc8: ['', Validators.required],
      Optd8: ['', Validators.required],
      Opta9: ['', Validators.required],
      Optb9: ['', Validators.required],
      Optc9: ['', Validators.required],
      Optd9: ['', Validators.required],
      Opta10: ['', Validators.required],
      Optb10: ['', Validators.required],
      Optc10: ['', Validators.required],
      Optd10: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
      answer5: ['', Validators.required],
      answer6: ['', Validators.required],
      answer7: ['', Validators.required],
      answer8: ['', Validators.required],
      answer9: ['', Validators.required],
      answer10: ['', Validators.required],
      ownership: ['', Validators.required],
      Completed: false,
      isActive: true,
      isQCompleted: false,
      Score: 0,
      file: ['', Validators.required],
      file1: ['', Validators.required],
      file2: ['', Validators.required],
    });
  }

  QuizForm() {
    this.Quiz_Form = this.fb.group({
      course_name: ['', Validators.required],
      quiz_name: ['', Validators.required],
      question1: ['', Validators.required],
      Opta1: ['', Validators.required],
      Optb1: ['', Validators.required],
      Optc1: ['', Validators.required],
      Optd1: ['', Validators.required],
      answer1: ['', Validators.required],
      file: ['', Validators.required],
      isQCompleted: false,
      Score: 0
    });
  }

  DocForm() {
    this.Doc_Form = this.fb.group({
      course_name: ['', Validators.required],
      file: ['', Validators.required]
    });
  }

  publishIt() {
    if (this.isUpdate) {
      alert('Updated sucessfully');
      this.videoForm.value.score = 0;
      this.videoForm.value.ownership = localStorage.getItem('username');
      this.dataService.UpdateCompleteVideoList(this.key, this.videoForm.value);
      console.log(this.videoForm.value.embed);
      console.log(this.videoForm.value.embed1);
      console.log(this.videoForm.value.embed2);
    } else {
      alert('Pusblished');
      this.videoForm.value.score = 0;
      this.videoForm.value.file = this.downloadURL
        ? this.downloadURL.value
        : null;
      this.videoForm.value.file1 = this.downloadURL1
        ? this.downloadURL1.value
        : null;
        this.videoForm.value.file2 = this.downloadURL2
        ? this.downloadURL2.value
        : null;
      this.videoForm.value.ownership = localStorage.getItem('username');
      this.db.list(`/newCourse/`).push(this.videoForm.value);
      console.log(this.videoForm.value);
    }
    this.router.navigate(['/training']);
  }

  publishQuiz() {
    this.db.list(`/newCourse1/`).push(this.Quiz_Form.value);
  }

  publishDoc() {
    alert('Pusblished');
    this.item.key = this.Doc_Form.value.name;
    this.item.file = this.Doc_Form.value.file;
    this.test.push(this.item);
    // this.items.push(this.test);
    this.db.list(`/newCourse2/`).push(this.Doc_Form.value);
    console.log(this.Doc_Form.value.name);
  }

  readingparam() {
    this.key = this.route.snapshot.paramMap.get('key');
    this.isUpdate = this.key ? true : false;
    this.dataService
      .getVideoData()
      .snapshotChanges()
      .subscribe(data => {
        this.videoList = [];
        data.forEach(element => {
          const x = element.payload.toJSON();
          x['$key'] = element.key;
          this.videoList.push(x);
        });
        const filteredlist = this.videoList
          ? this.videoList.filter(a => a.$key === this.key)
          : [];
        this.videoForm.patchValue({
          question1: filteredlist[0].question1,
          question2: filteredlist[0].question2,
          question3: filteredlist[0].question3,
          question4: filteredlist[0].question4,
          question5: filteredlist[0].question5,
          question6: filteredlist[0].question6,
          question7: filteredlist[0].question7,
          question8: filteredlist[0].question8,
          question9: filteredlist[0].question9,
          question10: filteredlist[0].question10,
          name: filteredlist[0].name,
          embed: filteredlist[0].embed,
          embed1: filteredlist[0].embed1,
          embed2: filteredlist[0].embed2,
          isActive: filteredlist[0].isActive,
          Completed: filteredlist[0].Completed,
          URL: filteredlist[0].URL,
          URL1: filteredlist[0].URL1,
          URL2: filteredlist[0].URL2,
          Score: filteredlist[0].Score,
          Opta1: filteredlist[0].Opta1,
          Optb1: filteredlist[0].Optb1,
          Optc1: filteredlist[0].Optc1,
          Optd1: filteredlist[0].Optd1,
          answer1: filteredlist[0].answer1,
          Opta2: filteredlist[0].Opta2,
          Optb2: filteredlist[0].Optb2,
          Optc2: filteredlist[0].Optc2,
          Optd2: filteredlist[0].Optd2,
          answer2: filteredlist[0].answer2,
          Opta3: filteredlist[0].Opta3,
          Optb3: filteredlist[0].Optb3,
          Optc3: filteredlist[0].Optc3,
          Optd3: filteredlist[0].Optd3,
          answer3: filteredlist[0].answer3,
          Opta4: filteredlist[0].Opta4,
          Optb4: filteredlist[0].Optb4,
          Optc4: filteredlist[0].Optc4,
          Optd4: filteredlist[0].Optd4,
          answer4: filteredlist[0].answer4,
          Opta5: filteredlist[0].Opta5,
          Optb5: filteredlist[0].Optb5,
          Optc5: filteredlist[0].Optc5,
          Optd5: filteredlist[0].Optd5,
          answer5: filteredlist[0].answer5,
          Opta6: filteredlist[0].Opta6,
          Optb6: filteredlist[0].Optb6,
          Optc6: filteredlist[0].Optc6,
          Optd6: filteredlist[0].Optd6,
          answer6: filteredlist[0].answer6,
          Opta7: filteredlist[0].Opta7,
          Optb7: filteredlist[0].Optb7,
          Optc7: filteredlist[0].Optc7,
          Optd7: filteredlist[0].Optd7,
          answer7: filteredlist[0].answer7,
          Opta8: filteredlist[0].Opta8,
          Optb8: filteredlist[0].Optb8,
          Optc8: filteredlist[0].Optc8,
          Optd8: filteredlist[0].Optd8,
          answer8: filteredlist[0].answer8,
          Opta9: filteredlist[0].Opta1,
          Optb9: filteredlist[0].Optb1,
          Optc9: filteredlist[0].Optc1,
          Optd9: filteredlist[0].Optd1,
          answer9: filteredlist[0].answer1,
          Opta10: filteredlist[0].Opta10,
          Optb10: filteredlist[0].Optb10,
          Optc10: filteredlist[0].Optc10,
          Optd10: filteredlist[0].Optd10,
          answer10: filteredlist[0].answer10,
          isQCompleted: filteredlist[0].isQCompleted,
          key: filteredlist[0].key,
          file: filteredlist[0].file,
          file1: filteredlist[0].file1,
          file2: filteredlist[0].file2
        });
        console.log(filteredlist[0].URL);
        console.log(filteredlist[0].URL1);
        console.log(filteredlist[0].URL2);
      });
  }

  UploadQuiz() {
    this.QuizForm();
  }
  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.videoForm.patchValue({
          file: reader.result
        });

        // need to run CD since file load runs outside of zone
        // this.cd.markForCheck();
      };
    }
  }
  upload(event) {
    const randomId = Math.random()
      .toString(36)
      .substring(2);
    this.ref = this.afStorage.ref(randomId);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.downloadURL = this.task.downloadURL();
  }
  upload1(event) {
    const randomId = Math.random()
      .toString(36)
      .substring(2);
    this.ref1 = this.afStorage.ref(randomId);
    this.task1 = this.ref1.put(event.target.files[0]);
    this.uploadProgress1 = this.task1.percentageChanges();
    this.downloadURL1 = this.task1.downloadURL();
  }
  upload2(event) {
    const randomId = Math.random()
      .toString(36)
      .substring(2);
    this.ref2 = this.afStorage.ref(randomId);
    this.task2 = this.ref2.put(event.target.files[0]);
    this.uploadProgress2 = this.task2.percentageChanges();
    this.downloadURL2 = this.task2.downloadURL();
  }
}

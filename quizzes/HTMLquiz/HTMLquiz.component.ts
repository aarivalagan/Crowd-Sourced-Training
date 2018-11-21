import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-HTMLquiz',
  templateUrl: './HTMLquiz.component.html',
  styleUrls: ['./HTMLquiz.component.css']
})
export class HTMLquizComponent implements OnInit {
  q1: any;
  q2: any;
  q3: any;
  q4: any;
  counter: number = 0;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  SubmitClick() {
    if (this.q1 != undefined && this.q2 != undefined && this.q3 != undefined && this.q4 != undefined) {
      if (this.q1 == "1b") {
        this.counter += 1;
      }
      if (this.q2 == "2b") {
        this.counter += 1;
      }
      if (this.q3 == "3a") {
        this.counter += 1;
      }
      if (this.q4 == "4c") {
        this.counter += 1;
      }
      localStorage.setItem("HTMLScore", this.counter.toString());
      alert("Congrats for Completing the quiz .Your Score is : " + this.counter);
      this.router.navigate(['/quiz']);
    }
    else {
      alert("Please answer all questions to submit");
    }
  }
}

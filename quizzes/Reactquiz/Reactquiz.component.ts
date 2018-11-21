import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Reactquiz',
  templateUrl: './Reactquiz.component.html',
  styleUrls: ['./Reactquiz.component.css']
})
export class ReactquizComponent implements OnInit {
  q1:any;
  q2:any;
  q3:any;
  q4:any;
  counter: number = 0;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  SubmitClick(){
    if(this.q1 !=undefined && this.q2 !=undefined && this.q3 !=undefined &&this.q4 !=undefined){
      if (this.q1 == "1b") {
        this.counter += 1;
      }
      if (this.q2 == "2c") {
        this.counter += 1;
      }
      if (this.q3 == "3b") {
        this.counter += 1;
      }
      if (this.q4 == "4b") {
        this.counter += 1;
      }
      localStorage.setItem("ReactScore", this.counter.toString());
      alert("Congrats for Completing the quiz .Your Score is : " + this.counter);
    this.router.navigate(['/quiz']);
    }
    else{
      alert("Please answer all questions to submit");
    }
  }
}

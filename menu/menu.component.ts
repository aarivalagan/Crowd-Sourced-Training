import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  name: string;
  constructor(private router: Router, private af: AngularFireAuth) {
    this.name = localStorage.getItem("username");
  }
  ngOnInit() {
  }
  logout() {
    this.af.auth.signOut();
    this.router.navigate(['login']);
  }
}


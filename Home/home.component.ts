import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as Firebase from 'firebase/app';
import { Observable } from 'rxjs/observable';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
export interface Item { name: string; }
@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent {
    name: string;
    user: Observable<Firebase.User>;
    private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
    authenticated: boolean = false;
    constructor(private af: AngularFireAuth, private firebasedb: AngularFireDatabase,private afs: AngularFirestore) {
        this.name = localStorage.getItem("username");
        this.af.authState.subscribe((auth) => {
            if (auth != null) {
                this.user = af.authState;
                this.authenticated = true;
                // this.toDoList=firebasedb.object('title')
                // console.log(this.toDoList);
                this.itemsCollection = afs.collection<Item>('title');
                this.items = this.itemsCollection.valueChanges();
                console.log(this.items);
            }
        })
    }
    
}
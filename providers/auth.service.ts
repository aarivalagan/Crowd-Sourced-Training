import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth'

@Injectable()
export class AuthService {

  constructor(public af:AngularFireAuth) { }


}

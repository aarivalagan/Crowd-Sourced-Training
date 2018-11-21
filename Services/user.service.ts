import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private isUserloginin: boolean;
  public userName;
  constructor() {
    this.isUserloginin = false;
  }
  setUserLoginState() {
    return (this.isUserloginin = true);
  }
  getUserLoginState() {
    return this.isUserloginin;
  }
}

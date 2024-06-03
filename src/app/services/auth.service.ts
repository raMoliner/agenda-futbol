import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any;
  private users: any[] = [];

  constructor() {}

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  login(rut: string, password: string): boolean {
    const user = this.users.find(u => u.rut === rut && u.password === password);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  register(user: any): boolean {
    if (this.users.find(u => u.rut === user.rut)) {
      return false; 
    }
    this.users.push(user);
    return true;
  }

  logout() {
    this.currentUser = null;
  }
}
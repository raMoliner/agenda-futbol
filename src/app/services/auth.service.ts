import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: any[] = [];
  private currentUser: any;

  constructor() {
    this.loadUsers();
  }

  loadUsers() {
    const users = localStorage.getItem('users');
    if (users) {
      this.users = JSON.parse(users);
    }
  }

  saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
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
      return false; // Usuario ya existe
    }
    this.users.push(user);
    this.saveUsers();
    return true;
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }
}
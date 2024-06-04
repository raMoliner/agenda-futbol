import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarios: any[] = [];
  private currentUser: any = null;

  login(rut: string, password: string): Observable<boolean> {
    const usuario = this.usuarios.find(u => u.rut === rut && u.password === password);
    this.currentUser = usuario || null;
    return of(!!usuario);
  }

  register(user: any): Observable<boolean> {
    const exists = this.usuarios.some(u => u.rut === user.rut);
    if (!exists) {
      this.usuarios.push(user);
      return of(true);
    } else {
      return of(false);
    }
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  logout(): void {
    this.currentUser = null;
  }
}
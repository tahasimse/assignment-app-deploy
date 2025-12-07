import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  admin = false;

  // Tableau de login/password/role
  users = [
    {login: 'user', password: 'user', role: 'user'},
    {login: 'admin', password: 'admin', role: 'admin'}
  ];

  logIn(login: string, password: string): boolean {
    const user = this.users.find(u => u.login === login && u.password === password);
    if (user) {
      this.loggedIn = true;
      this.admin = (user.role === 'admin');
      return true;
    }
    return false;
  }

  logOut() {
    this.loggedIn = false;
    this.admin = false;
  }

  // renvoie true si on est loggué
  isLogged() {
    return this.loggedIn;
  }

  // renvoie une promesse qui, lorsqu'elle est "résolved", renvoie si l'utilisateur
  // est admin ou pas.
  isAdmin() {
    const isUserAdmin = new Promise(
      (resolve, reject) => {
        resolve(this.admin)
      }
    );

    return isUserAdmin;
  }
}

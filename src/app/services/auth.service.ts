import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('Login bem-sucedido', userCredential);
        return userCredential;
      })
      .catch((error) => {
        console.error('Erro no login', error);
        throw error; 
      });
  }


  logout() {
    return this.afAuth.signOut();
  }

 
  async register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

 
  isLoggedIn(): Observable<any> {
    return this.afAuth.authState; 
  }
}

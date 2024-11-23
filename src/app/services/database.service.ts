import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private db: AngularFireDatabase) {}

  addAction(action: any) {
    return this.db.list('actions').push(action);
  }

  getActions() {
    return this.db.list('actions').valueChanges();
  }
}

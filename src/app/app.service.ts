import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  isLoading$ = new BehaviorSubject(false);
  userName$ = new BehaviorSubject(localStorage.getItem('email'));
  getIsLoading = this.isLoading$.asObservable();
  constructor() {}

  setLoading(value: boolean) {
    this.isLoading$.next(value);
  }
  setUsername(value: string) {
    this.userName$.next(value);
  }
}

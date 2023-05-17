import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  isLoading$ = new BehaviorSubject(false);
  getIsLoading = this.isLoading$.asObservable();
  constructor() {}

  setLoading(value: boolean) {
    console.log('okokokkkkkkkkkkk');

    this.isLoading$.next(value);
  }
}

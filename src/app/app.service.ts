import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  abc = 'sdsdsd';
  isLoading$ = new BehaviorSubject(false);
  getIsLoading = this.isLoading$.asObservable();
  constructor() {}

  setLoading(value: boolean) {
    this.isLoading$.next(value);
  }
}

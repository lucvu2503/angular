import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from 'src/model/book.model';
import { environment } from 'src/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/json',
    Authorization: `Bearer ${'2ADA#3FDFD'}`,
  }),
};
const apiUrl = 'https://5f0c7a5911b7f60016055e6c.mockapi.io/Api/ahihi';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.httpClient
      .get<Book[]>(environment.URL_API + 'book', httpOptions)
      .pipe();
  }
}

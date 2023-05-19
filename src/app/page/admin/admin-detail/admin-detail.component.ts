import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, Observable, interval } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { AppService } from 'src/app/app.service';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/model/book.model';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css'],
})
export class AdminDetailComponent implements OnInit {
  bookForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private appService: AppService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.handleGetBookDetail();
    this.initReactForm();
  }

  initReactForm() {
    this.bookForm = this.fb.group({
      id: [''],
      cost: [null, Validators.compose([Validators.required])],
      description: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(255),
        ]),
      ],
      status: [false],
    });
  }

  handleGetBookDetail() {
    this.appService.setLoading(true);
    try {
      this.route.paramMap
        .pipe(
          map((params: any) => params.get('slug')),
          switchMap(
            (idBook: string) => idBook && this.bookService.getBookById(idBook)
          )
        )
        .subscribe((data: any) => {
          if (data) {
            this.bookForm.controls['id'].setValue(data.id);
            this.bookForm.controls['cost'].setValue(data.cost);
            this.bookForm.controls['description'].setValue(data.description);
            this.bookForm.controls['status'].setValue(data.status);
          }
        });
    } catch (error) {
    } finally {
      this.appService.setLoading(false);
    }
  }
}

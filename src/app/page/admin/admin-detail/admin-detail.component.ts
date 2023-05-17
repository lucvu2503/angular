import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, Observable, interval } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/model/book.model';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css'],
})
export class AdminDetailComponent implements OnInit {
  bookDetail: Book = {
    id: '',
    name: '',
    cost: 0,
    description: '',
    status: false,
  };
  bookForm: any;

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };

  heroForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private appService: AppService
  ) {}
  ngOnInit(): void {
    this.handleGetBookDetail();

    this.bookForm = new FormGroup({
      cost: new FormControl(this.bookDetail.cost, [
        Validators.required,
        Validators.minLength(4),
        // forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      // alterEgo: new FormControl(this.hero.alterEgo),
      // power: new FormControl(this.hero.power, Validators.required)
    });
    this.bookForm.valueChanges.subscribe((result: any) => console.log(result));

    this.heroForm = new FormGroup(
      {
        name: new FormControl(this.hero.name, [
          Validators.required,
          Validators.minLength(4),
          // forbiddenNameValidator(/bob/i)
        ]),
        alterEgo: new FormControl(this.hero.alterEgo, {
          // asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
          updateOn: 'blur',
        }),
        power: new FormControl(this.hero.power, Validators.required),
      },
      {
        // validators: identityRevealedValidator
      }
    ); // <-- add custom validator at the FormGroup level
    this.heroForm.get('name')?.markAsTouched();
    // console.log(this.heroForm.get('name')?.value);
    // console.log(this.heroForm.get('name')!?.hasError('minlength'));

    // const timer = interval(1000)
    //   .pipe(map((e) => e * 2))
    //   .subscribe((value) => console.log(value));
  }

  get cost() {
    return this.bookForm.get('cost')!;
  }

  get name() {
    return this.heroForm.get('name')!;
  }

  get power() {
    return this.heroForm.get('power')!;
  }

  get alterEgo() {
    return this.heroForm.get('alterEgo')!;
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
            this.bookDetail = data;
          }
        });
    } catch (error) {
    } finally {
      this.appService.setLoading(false);
    }
  }
}

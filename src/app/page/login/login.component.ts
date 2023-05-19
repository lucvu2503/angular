import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { BookService } from 'src/app/book.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  visibility = false;
  formLogin!: FormGroup;
  constructor(
    private bookService: BookService,
    private appService: AppService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // this.toastr.success('Hello world!', 'Toastr fun!');
    this.formLogin = this.formBuilder.group({
      userName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          // Validators.pattern(/^[a-z]{6,32}$/i),
        ]),
      ],
      password: ['', Validators.compose([Validators.required])],
    });
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  get registerFormControl() {
    return this.formLogin.controls;
  }

  addValidatorForUsername() {
    this.formLogin.controls['userName'].addValidators(
      Validators.pattern(/^[a-z]{6,32}$/i)
    );
    this.formLogin.controls['userName'].updateValueAndValidity();
  }

  handleLogin() {
    if (this.formLogin.valid) {
      let users = null;
      this.appService.setLoading(true);
      this.bookService.getListUser().subscribe({
        next: (data) => {
          const user = data.find(
            (value) =>
              value.email === this.formLogin.value.userName &&
              value.password === this.formLogin.value.password
          );
          if (user) {
            localStorage.setItem('jwt', user.token);
            localStorage.setItem('email', user.email.split('@')[0]);
            this.router.navigate(['']);
            this.toastr.success('Login successfully!');
          } else {
            this.formLogin.controls['userName'].setErrors({ incorrect: true });
            this.formLogin.controls['password'].setErrors({ incorrect: true });
            this.toastr.error('Email or Password incorrect!');
          }
          users = data;
          this.appService.setLoading(false);
        },
        error: (err) => {
          this.appService.setLoading(false);
        },
      });
    }
  }
}

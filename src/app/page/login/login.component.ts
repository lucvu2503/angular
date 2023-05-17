import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      userName: '',
      password: '',
    });
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.handleLogin();
  }
  handleLogin() {
    let users = null;
    this.appService.setLoading(true);
    this.bookService.getListUser().subscribe({
      next: (data) => {
        console.log(this.formLogin.value);
        const user = data.find(
          (value) =>
            value.email === this.formLogin.value.userName &&
            value.password === this.formLogin.value.password
        );
        if (user) {
          localStorage.setItem('jwt', user.token);
          this.router.navigate(['']);
          this.toastr.success('Login successfully!');
        } else {
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

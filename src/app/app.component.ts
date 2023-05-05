import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app';
  constructor(private router: Router, private spinner: NgxSpinnerService) {}
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
  }
  handleClickRouter(path: string): void {
    this.router.navigate([path]);
  }
}

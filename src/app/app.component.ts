import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app';
  isLoading = false;
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private appService: AppService
  ) {}
  // ngDoCheck(): void {
  //   this.isLoading = this.appService.isLoading2;
  // }
  ngOnInit() {
    /** spinner starts on init */
    // this.spinner.show();
    // this.isLoading = this.appService.isLoading2;
    this.appService.getIsLoading.subscribe((value) => {
      this.isLoading = value;
    });
  }

  handleClickRouter(path: string): void {
    this.router.navigate([path]);
  }
}

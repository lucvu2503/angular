import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent {
  isLogin = true;
  username?: string | null = 'lucvx';
  constructor(private router: Router, private appService: AppService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.isLogin = !!localStorage.getItem('jwt');
    this.appService.userName$.subscribe((value) => (this.username = value));
    this.username = localStorage.getItem('email');
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  handleClickRouter(path: string): void {
    this.router.navigate([path]);
  }
  handleLogout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('email');
    this.router.navigate(['login']);
  }
}

import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent {
  isLogin = true;
  username = 'lucvx';
  constructor(private router: Router) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLogin = !!localStorage.getItem('jwt');
  }

  handleClickRouter(path: string): void {
    this.router.navigate([path]);
  }
  handleLogout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['login']);
  }
}

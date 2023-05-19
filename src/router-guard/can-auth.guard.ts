import { Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
class PermissionsService {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    //your logic goes here
    const isPageLogin = next.routeConfig?.path === 'login';

    if (localStorage.getItem('jwt')) {
      if (isPageLogin) {
        this.router.navigate(['']);
      }
      return true;
    } else {
      if (!isPageLogin) {
        this.router.navigate(['login']);
      }
      return true;
    }
  }
}

export const canAuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(PermissionsService).canActivate(route, state);
};

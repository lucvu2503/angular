import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthComponent } from 'src/app/layout/auth/auth.component';
import { canAuthGuard } from 'src/router-guard/can-auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
    children: [{ path: '', component: LoginComponent }],
    canActivate: [canAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteLoginRoutingModule {}

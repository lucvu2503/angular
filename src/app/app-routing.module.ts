import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { AppHeroComponent } from './page/app-hero/app-hero.component';
import { DefaultComponent } from './layout/default/default.component';
import { canAuthGuard } from 'src/router-guard/can-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DefaultComponent,
    children: [{ path: '', component: DashboardComponent }],
    canActivate: [canAuthGuard],
  },
  {
    path: 'home',
    component: DefaultComponent,
    children: [{ path: '', component: HomePageComponent }],
    canActivate: [canAuthGuard],
  },
  {
    path: 'app',
    component: DefaultComponent,
    children: [{ path: '', component: AppHeroComponent }],
    canActivate: [canAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

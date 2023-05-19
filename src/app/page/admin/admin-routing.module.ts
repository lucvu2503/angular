import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin-list/admin.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { DefaultComponent } from 'src/app/layout/default/default.component';
import { canAuthGuard } from 'src/router-guard/can-auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: DefaultComponent,
    children: [
      { path: '', component: AdminComponent },
      { path: ':slug/detail', component: AdminDetailComponent },
      { path: 'add', component: AdminDetailComponent },
    ],
    canActivate: [canAuthGuard],
  },
  // {
  //   path: ':slug/detail',
  //   component: DefaultComponent,
  //   children: [{ path: '', component: AdminComponent }],
  // },
  // {
  //   path: 'add',
  //   component: DefaultComponent,
  //   children: [{ path: '', component: AdminComponent }],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

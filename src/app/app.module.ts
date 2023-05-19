import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentDemoComponent } from './common/component-demo/component-demo.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ButtonComponent } from './common/button/button.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHeroComponent } from './page/app-hero/app-hero.component';
import { HeroesComponent } from './page/heroes/heroes.component';
import { HeroDetailComponent } from './hero-app/hero-detail/hero-detail.component';
import { MessagesComponent } from './hero-app/messages/messages.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroService } from './hero.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminComponent } from './page/admin/admin-list/admin.component';
import { MatTableModule } from '@angular/material/table';
import { BookService } from './book.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalComponent } from './common/modal/modal.component';
import { BgcolorDirective } from './bgcolor.directive';
import { ModalUpdateComponent } from './common/modal-update/modal-update.component';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminDetailComponent } from './page/admin/admin-detail/admin-detail.component';
import { AdminRoutingModule } from './page/admin/admin-routing.module';
import { LoginComponent } from './page/login/login.component';
import { DefaultComponent } from './layout/default/default.component';
import { AuthComponent } from './layout/auth/auth.component';
import { RouteLoginModule } from './page/login/route-login.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDemoComponent,
    HomePageComponent,
    DashboardComponent,
    ButtonComponent,
    AppHeroComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    AdminComponent,
    ModalComponent,
    BgcolorDirective,
    ModalUpdateComponent,
    AdminDetailComponent,
    LoginComponent,
    DefaultComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true,
    }),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    RouteLoginModule,
    MatIconModule,
    MatButtonModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    HeroService,
    BookService,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: 'always' },
    },
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdAppModule } from './advertissements/ad-app.module';
import { AlertAppModule } from './alert/alert-app.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {SharedModule} from './shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AlertModule} from './shared/alert/alert.module';
import {AdModule} from './shared/ad/ad.module';
import {HomeModule} from './home/home.module';
import {IpcModule} from './ipc/ipc.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    AdAppModule,
    AdModule,
    AlertAppModule,
    AlertModule,
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    IpcModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

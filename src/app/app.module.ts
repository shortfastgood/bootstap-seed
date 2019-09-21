import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AboutModule }     from './about/about.module';
import { AppComponent }    from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { HomeModule }      from './home/home.module';
import { SharedModule }    from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AboutModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HomeModule,
    HttpClientModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

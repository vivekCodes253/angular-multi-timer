import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeboxComponent } from './timerarea/timebox/timebox.component';
import { HeaderComponent } from './header/header.component';
import { CreatetimerComponent } from './createtimer/createtimer.component';
import { TimerareaComponent } from './timerarea/timerarea.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeboxComponent,
    HeaderComponent,
    CreatetimerComponent,
    TimerareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

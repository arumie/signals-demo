import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RxjsCounterComponent } from './rxjs-counter/rxjs-counter.component';
import { SignalCounterComponent } from './signal-counter/signal-counter.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RxjsCounterComponent,
    SignalCounterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

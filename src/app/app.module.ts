import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RxjsCounterComponent } from './rxjs-counter/rxjs-counter.component';
import { SignalCounterComponent } from './signal-counter/signal-counter.component';
import { RxjsDerivedValueComponent } from './rxjs-derived-value/rxjs-derived-value.component';
import { SignalDerivedValueComponent } from './signal-derived-value/signal-derived-value.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RxjsCounterComponent,
    RxjsDerivedValueComponent,
    SignalCounterComponent,
    SignalDerivedValueComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {Inject, Injectable, OpaqueToken} from '@angular/core';

import { AppComponent } from './app.component';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
	provide: HAMMER_GESTURE_CONFIG, 
        useClass: MyHammerConfig 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

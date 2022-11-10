import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '@nx-workspace/ui';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { App1InputComponent } from './app1-input/app1-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, App1InputComponent],
  imports: [BrowserModule, UiModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [App1InputComponent,UiModule],
})
export class AppModule {}



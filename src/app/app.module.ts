import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionComponent } from './sessions/session/session.component';
import { SessionListComponent } from './sessions/session-list/session-list.component';
import { SessionService } from './shared/session.service';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SessionsComponent,
    SessionComponent,
    SessionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule

  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

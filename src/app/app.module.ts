import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProsemirrorAngularModule } from '../../packages/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptInColumnResizeDemoModule } from './opt-in/opt-in-column-resize-demo-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProsemirrorAngularModule,
    OptInColumnResizeDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent, ]
})
export class AppModule { }

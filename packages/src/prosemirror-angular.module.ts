import { NgModule } from '@angular/core';
import { ProsemirrorAngularComponent } from './editor/prosemirror-angular.component';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PmToolbar } from './components/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ProsemirrorAngularComponent, PmToolbar],
  imports: [
    CommonModule,
    BrowserModule,
    NgZorroAntdModule,
    NzIconModule
  ],
  exports: [ProsemirrorAngularComponent, PmToolbar]
})
export class ProsemirrorAngularModule { }

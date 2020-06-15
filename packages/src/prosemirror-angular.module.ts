import { NgModule } from '@angular/core';
import { ProsemirrorAngularComponent } from './editor/prosemirror-angular.component';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PmToolbar } from './components/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PmLinkEdit } from './components/link/link-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProsemirrorAngularComponent, PmLinkEdit, PmToolbar],
  imports: [
    FormsModule,
    ReactiveFormsModule ,
    CommonModule,
    BrowserModule,
    NgZorroAntdModule,
    NzIconModule
  ],
  exports: [ProsemirrorAngularComponent, PmToolbar]
})
export class ProsemirrorAngularModule { }

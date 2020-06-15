
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule ,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    FormsModule,
    NzSelectModule,
    NzModalModule,
    NzInputModule,
    NzFormModule,
    NzButtonModule
  ],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
})
export class NgZorroAntdModule {

}

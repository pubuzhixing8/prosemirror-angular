
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { FormsModule } from '@angular/forms';
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    NzSelectModule
  ],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
})
export class NgZorroAntdModule {

}

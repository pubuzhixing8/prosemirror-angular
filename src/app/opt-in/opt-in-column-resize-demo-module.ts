/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatColumnResizeModule} from '@angular/material-experimental/column-resize';

import {OptInColumnResizeDemoComponent} from './opt-in-column-resize-demo';

@NgModule({
  imports: [
    MatColumnResizeModule,
    MatTableModule,
  ],
  declarations: [OptInColumnResizeDemoComponent],
  exports: [OptInColumnResizeDemoComponent],
})
export class OptInColumnResizeDemoModule {
}

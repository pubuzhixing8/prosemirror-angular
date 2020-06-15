import { Component } from '@angular/core';
import { toggleMark } from "prosemirror-commands"
import { MarkTypes, InlineTypes } from '../../constants/node-types';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'pm-link-edit',
  templateUrl: 'link-edit.component.html',
})
export class PmLinkEdit {
  constructor(private modalService: NzModalService) {}

  title = '';

  href = '';

  apply() {
    const view = (window as any).view;
    const type = view.state.config.schema.marks[InlineTypes.link]
    const cmd = toggleMark(type, { href: this.href, title: this.title })
    cmd(view.state, view.dispatch)
    view.focus()
    this.close();
  }

  close() {
    this.modalService.closeAll();
  }
}
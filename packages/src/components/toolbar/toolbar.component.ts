import { Component } from '@angular/core';
import { toggleMark } from "prosemirror-commands"
import { MarkTypes, InlineTypes } from '../../constants/node-types';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PmLinkEdit } from '../link/link-edit.component';

@Component({
  selector: 'pm-toolbar',
  templateUrl: 'toolbar.component.html',
})
export class PmToolbar {
  constructor(private modalService: NzModalService) {}
  mousedown(event: MouseEvent, typeKey) {
    event.preventDefault();
    const state = (window as any).view.state;
    const type = state.config.schema.marks[typeKey]
    const cmd = toggleMark(type);
    cmd(state, (window as any).view.dispatch);
  }

  mousedownLink(event: MouseEvent) {
    event.preventDefault();
    const state = (window as any).view.state;
    const type = state.config.schema.marks[InlineTypes.link]
    const cmd = toggleMark(type);
    if (this.isActive(InlineTypes.link)) {
      cmd(state, (window as any).view.dispatch);
    } else {
      // open link edit
      // toggleMark(markType, attrs)(view.state, view.dispatch)
      // view.focus()

      this.openLinkEdit();
    }
  }

  openLinkEdit(): void {
    this.modalService.create({
      nzTitle: '编辑链接',
      nzContent: PmLinkEdit
    });
  }

  isActive(type: string) {
    const state = (window as any).view.state;
    const active = markActive(state, type);
    return active
  }

  MarkTypes = MarkTypes;
  InlineTypes = InlineTypes;
}

function markActive(state, typeKey) {
  let { from, $from, to, empty } = state.selection;
  const type = state.config.schema.marks[typeKey];
  if (empty) return type.isInSet(state.storedMarks || $from.marks());
  else return state.doc.rangeHasMark(from, to, type);
}

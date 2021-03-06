import { Component } from '@angular/core';
import { toggleMark } from "prosemirror-commands"
import { MarkTypes, InlineTypes, BlockTypes } from '../../constants/node-types';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PmLinkEdit } from '../link/link-edit.component';
import { liftListItem } from 'prosemirror-schema-list';
import {wrapInList} from "prosemirror-schema-list"

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

  mousedownTodo(event: MouseEvent) {
    event.preventDefault();
    const state = (window as any).view.state;
    const todo_list = state.config.schema.nodes.todo_list
    // const cmd = liftListItem(todo_item);
    const cmd = wrapInList(todo_list);
    cmd(state, (window as any).view.dispatch);
  }

  mousedownHr(event: MouseEvent) {
    event.preventDefault();
    const view = (window as any).view;
    const state = view.state;
    let hr = state.config.schema.nodes.horizontal_rule;
    view.dispatch(state.tr.replaceSelectionWith(hr.create()))
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
  BlockTypes = BlockTypes;
}

function markActive(state, typeKey) {
  let { from, $from, to, empty } = state.selection;
  const type = state.config.schema.marks[typeKey];
  if (empty) return type.isInSet(state.storedMarks || $from.marks());
  else return state.doc.rangeHasMark(from, to, type);
}

import { Component } from '@angular/core';
import { toggleMark } from "prosemirror-commands"
import { MarkTypes } from '../../constants/node-types';

@Component({
  selector: 'pm-toolbar',
  templateUrl: 'toolbar.component.html',
})
export class PmToolbar {
  mousedown(event: MouseEvent, typeKey) {
    event.preventDefault();
    const state = (window as any).view.state;
    const type = state.config.schema.marks[typeKey]
    const cmd = toggleMark(type);
    cmd(state, (window as any).view.dispatch);
  }

  isActive(type: string) {
    const state = (window as any).view.state;
    const active = markActive(state, type);
    return active
  }

  MarkTypes = MarkTypes;
}

function markActive(state, typeKey) {
  let { from, $from, to, empty } = state.selection;
  const type = state.config.schema.marks[typeKey];
  if (empty) return type.isInSet(state.storedMarks || $from.marks());
  else return state.doc.rangeHasMark(from, to, type);
}

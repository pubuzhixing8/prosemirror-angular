import { Component, OnInit, Inject, TemplateRef, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { Schema, DOMParser } from 'prosemirror-model';
import { schema } from 'prosemirror-schema-basic';
import { addListNodes } from 'prosemirror-schema-list';
import { exampleSetup } from '../core/index';
import { IconDefinition } from '@ant-design/icons-angular';
import { NZ_ICONS } from 'ng-zorro-antd/icon';

@Component({
  selector: 'pm-editor',
  templateUrl: 'prosemirror-angular.component.html',
  styles: [],
})
export class ProsemirrorAngularComponent implements OnInit {

  @Output()
  pmChange: EventEmitter<JSON> = new EventEmitter();

  constructor(
    @Inject(NZ_ICONS)
    private icons: IconDefinition[],
    private elementRef: ElementRef
  ) {
  }

  ngOnInit(): void {
    // Mix the nodes from prosemirror-schema-list into the basic schema to
    // create a schema with list support.
    const mySchema = new Schema({
      nodes: addListNodes(schema.spec.nodes, 'paragraph block*', 'block'),
      marks: schema.spec.marks,
    });

    (window as any).view = new EditorView(document.querySelector('#editor'), {
      state: EditorState.create({
        doc: DOMParser.fromSchema(mySchema).parse(
          document.querySelector('#content')
        ),
        plugins: exampleSetup({ schema: mySchema }),
      }),
      dispatchTransaction: transaction => {
        const { state, transactions } = (window as any).view.state.applyTransaction(transaction);

        (window as any).view.updateState(state);

        if (transactions.some(tr => tr.docChanged)) {
          this.pmChange.emit(state.doc.toJSON());
        }
      },
    });
  }
}

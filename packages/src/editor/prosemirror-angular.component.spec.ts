import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsemirrorAngularComponent } from './prosemirror-angular.component';

describe('ProsemirrorAngularComponent', () => {
  let component: ProsemirrorAngularComponent;
  let fixture: ComponentFixture<ProsemirrorAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsemirrorAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsemirrorAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

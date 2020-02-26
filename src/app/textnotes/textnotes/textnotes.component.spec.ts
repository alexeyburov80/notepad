import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextnotesComponent } from './textnotes.component';

describe('TextnotesComponent', () => {
  let component: TextnotesComponent;
  let fixture: ComponentFixture<TextnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

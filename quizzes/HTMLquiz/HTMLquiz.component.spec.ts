import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTMLquizComponent } from './HTMLquiz.component';

describe('HTMLquizComponent', () => {
  let component: HTMLquizComponent;
  let fixture: ComponentFixture<HTMLquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTMLquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTMLquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

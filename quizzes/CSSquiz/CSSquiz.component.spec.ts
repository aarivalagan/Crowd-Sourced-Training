import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSquizComponent } from './CSSquiz.component';

describe('CSSquizComponent', () => {
  let component: CSSquizComponent;
  let fixture: ComponentFixture<CSSquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSSquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSSquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

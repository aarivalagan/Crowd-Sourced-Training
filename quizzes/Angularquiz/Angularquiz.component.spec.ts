import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularquizComponent } from './Angularquiz.component';

describe('AngularquizComponent', () => {
  let component: AngularquizComponent;
  let fixture: ComponentFixture<AngularquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

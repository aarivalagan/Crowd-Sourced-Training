import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactquizComponent } from './Reactquiz.component';

describe('ReactquizComponent', () => {
  let component: ReactquizComponent;
  let fixture: ComponentFixture<ReactquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaquizComponent } from './Javaquiz.component';

describe('JavaquizComponent', () => {
  let component: JavaquizComponent;
  let fixture: ComponentFixture<JavaquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

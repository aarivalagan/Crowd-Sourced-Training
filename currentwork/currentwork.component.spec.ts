import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentworkComponent } from './currentwork.component';

describe('CurrentworkComponent', () => {
  let component: CurrentworkComponent;
  let fixture: ComponentFixture<CurrentworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

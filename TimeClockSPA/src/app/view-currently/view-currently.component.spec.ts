import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCurrentlyComponent } from './view-currently.component';

describe('ViewCurrentlyComponent', () => {
  let component: ViewCurrentlyComponent;
  let fixture: ComponentFixture<ViewCurrentlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCurrentlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCurrentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

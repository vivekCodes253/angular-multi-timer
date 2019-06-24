import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetimerComponent } from './createtimer.component';

describe('CreatetimerComponent', () => {
  let component: CreatetimerComponent;
  let fixture: ComponentFixture<CreatetimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

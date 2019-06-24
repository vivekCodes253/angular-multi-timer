import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerareaComponent } from './timerarea.component';

describe('TimerareaComponent', () => {
  let component: TimerareaComponent;
  let fixture: ComponentFixture<TimerareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

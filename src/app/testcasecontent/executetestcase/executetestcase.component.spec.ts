import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutetestcaseComponent } from './executetestcase.component';

describe('ExecutetestcaseComponent', () => {
  let component: ExecutetestcaseComponent;
  let fixture: ComponentFixture<ExecutetestcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutetestcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutetestcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcaseheaderComponent } from './testcaseheader.component';

describe('TestcaseheaderComponent', () => {
  let component: TestcaseheaderComponent;
  let fixture: ComponentFixture<TestcaseheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcaseheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcaseheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

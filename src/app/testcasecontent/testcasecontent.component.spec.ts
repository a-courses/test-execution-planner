import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcasecontentComponent } from './testcasecontent.component';

describe('TestcasecontentComponent', () => {
  let component: TestcasecontentComponent;
  let fixture: ComponentFixture<TestcasecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcasecontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcasecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

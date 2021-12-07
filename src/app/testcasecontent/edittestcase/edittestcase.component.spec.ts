import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittestcaseComponent } from './edittestcase.component';

describe('EdittestcaseComponent', () => {
  let component: EdittestcaseComponent;
  let fixture: ComponentFixture<EdittestcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittestcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittestcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

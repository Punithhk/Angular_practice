import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormhandleComponent } from './formhandle.component';

describe('FormhandleComponent', () => {
  let component: FormhandleComponent;
  let fixture: ComponentFixture<FormhandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormhandleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormhandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpModuleComponent } from './emp-module.component';

describe('EmpModuleComponent', () => {
  let component: EmpModuleComponent;
  let fixture: ComponentFixture<EmpModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

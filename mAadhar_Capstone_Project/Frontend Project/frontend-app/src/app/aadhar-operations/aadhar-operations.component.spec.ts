import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadharOperationsComponent } from './aadhar-operations.component';

describe('AadharOperationsComponent', () => {
  let component: AadharOperationsComponent;
  let fixture: ComponentFixture<AadharOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AadharOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AadharOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

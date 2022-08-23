import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDebtorsComponent } from './age-debtors.component';

describe('AgeDebtorsComponent', () => {
  let component: AgeDebtorsComponent;
  let fixture: ComponentFixture<AgeDebtorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeDebtorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeDebtorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

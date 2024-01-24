import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoandetailsComponent } from './loandetails.component';

describe('LoandetailsComponent', () => {
  let component: LoandetailsComponent;
  let fixture: ComponentFixture<LoandetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoandetailsComponent]
    });
    fixture = TestBed.createComponent(LoandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

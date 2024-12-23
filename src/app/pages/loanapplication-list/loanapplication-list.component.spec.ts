import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanapplicationListComponent } from './loanapplication-list.component';

describe('LoanapplicationListComponent', () => {
  let component: LoanapplicationListComponent;
  let fixture: ComponentFixture<LoanapplicationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanapplicationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanapplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

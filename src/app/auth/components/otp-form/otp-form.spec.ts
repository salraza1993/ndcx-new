import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpForm } from './otp-form';

describe('OtpForm', () => {
  let component: OtpForm;
  let fixture: ComponentFixture<OtpForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

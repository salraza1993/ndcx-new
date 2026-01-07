import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBackdrop } from './auth-backdrop';

describe('AuthBackdrop', () => {
  let component: AuthBackdrop;
  let fixture: ComponentFixture<AuthBackdrop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthBackdrop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthBackdrop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

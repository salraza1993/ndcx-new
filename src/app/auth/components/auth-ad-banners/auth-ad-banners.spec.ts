import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAdBanners } from './auth-ad-banners';

describe('AuthAdBanners', () => {
  let component: AuthAdBanners;
  let fixture: ComponentFixture<AuthAdBanners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthAdBanners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthAdBanners);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

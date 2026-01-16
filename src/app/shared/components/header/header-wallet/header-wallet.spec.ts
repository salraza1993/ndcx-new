import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWallet } from './header-wallet';

describe('HeaderWallet', () => {
  let component: HeaderWallet;
  let fixture: ComponentFixture<HeaderWallet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWallet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWallet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

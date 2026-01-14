import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLogo } from './client-logo';

describe('ClientLogo', () => {
  let component: ClientLogo;
  let fixture: ComponentFixture<ClientLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientLogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

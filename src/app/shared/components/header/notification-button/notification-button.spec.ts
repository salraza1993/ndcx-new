import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationButton } from './notification-button';

describe('NotificationButton', () => {
  let component: NotificationButton;
  let fixture: ComponentFixture<NotificationButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

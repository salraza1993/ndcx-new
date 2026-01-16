import { Component, signal } from '@angular/core';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
@Component({
  selector: 'app-notification-button',
  imports: [OverlayBadgeModule],
  templateUrl: './notification-button.html',
  styleUrl: './notification-button.css'
})
export class NotificationButton {
  notificationsCounter = signal(0);
}

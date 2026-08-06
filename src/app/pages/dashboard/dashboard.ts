import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { PageHeader } from '@components/page-header/page-header';
import { InputTextModule } from 'primeng/inputtext';
import { AuthServices } from '../../auth/services/auth-services';

@Component({
  selector: 'app-dashboard',
  imports: [InputTextModule, ContentWrapper, PageHeader],
  templateUrl: './dashboard.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './dashboard.css'
})
export class Dashboard {
  private _authServices = inject(AuthServices);
  signOut(): void {
    this._authServices.signOut();
  }
}

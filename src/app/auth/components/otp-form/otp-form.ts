import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputOtpModule } from 'primeng/inputotp';

@Component({
  selector: 'app-otp-form',
  imports: [InputOtpModule, FormsModule, ButtonModule],
  templateUrl: './otp-form.html',
  styleUrl: './otp-form.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: {
    class: 'otp-form-host flex flex-col gap-4'
  }
})
export class OtpForm {
  otpValue = signal<number | null>(null);
  // eslint-disable-next-line
  onSubmit(form: any) {
    form.resetForm();
  }
}

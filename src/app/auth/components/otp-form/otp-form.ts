import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputOtpModule } from 'primeng/inputotp';

@Component({
  selector: 'app-otp-form',
  imports: [InputOtpModule, FormsModule, ButtonModule],
  templateUrl: './otp-form.html',
  styleUrl: './otp-form.css'
})
export class OtpForm {
  otpValue: any;

  onSubmit(form: any) {
    form.resetForm();
  }
}

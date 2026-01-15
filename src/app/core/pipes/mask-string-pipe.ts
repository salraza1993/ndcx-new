import { Pipe, PipeTransform } from '@angular/core';
type maskType = '*' | '#' | 'X' | '•';
type maskPosition = 'start' | 'end';
@Pipe({
  name: 'maskString'
})
export class MaskStringPipe implements PipeTransform {
  transform(
    value: string,
    visibleChars = 4,
    maskChar: maskType = '•',
    maskPosition: maskPosition = 'end'
  ): string {
    if (!value || value.length <= visibleChars) {
      return value;
    }
    const maskedLength = value.length - visibleChars;
    const maskedSection = maskChar.repeat(maskedLength);
    const visibleSection = value.slice(-visibleChars);
    if (maskPosition === 'start') {
      return visibleSection + maskedSection;
    }
    return maskedSection + visibleSection;
  }
}

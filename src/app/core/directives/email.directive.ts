import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { CustomValidators } from '../validators/custom.validators';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailDirective,
    multi: true
  }]
})
export class EmailDirective implements Validator {

  validate(c: AbstractControl): ValidationErrors | null {
    return CustomValidators.email(c);
  }

}
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
    static capitalLetter(c: AbstractControl): ValidationErrors | null {
        if (c.value !== undefined && c.value.toString()[0] !== c.value.toString().toUpperCase()[0]) {
            return {
                capitalLetter: true
            };
        }
        return null;
    }

    static email(c: AbstractControl): ValidationErrors | null {
        if (
            c.value !== undefined &&
            !c.value.toString().match('[a-z0-9._%+-]+@[a-z0-9.-]+')
        ) {
            return {
                email: true
            };
        }
        return null;
    }
}

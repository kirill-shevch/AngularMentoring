import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {

  get firstNameRequired(): string {
    return 'Please enter your first name.';
  }

  get firstNameMinLength(): string {
    return 'The first name must be longer than 3 characters.';
  }

  get firstNameCapitalLetter(): string {
    return 'The first name must start with a capital letter.';
  }

  get emailRequired(): string {
    return 'Please enter your email address.';
  }

  get emailInvalid(): string {
    return 'Please enter a valid email address.';
  }

  get phoneInvalid(): string {
    return 'Please enter a valid phone number.';
  }
}

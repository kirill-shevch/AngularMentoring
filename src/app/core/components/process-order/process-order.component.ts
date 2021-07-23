import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailDirective } from '../../directives/email.directive';
import { ErrorMessageService } from '../../services/error-message.service';
import { CustomValidators } from '../../validators/custom.validators';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {

  placeholder = {
    firstName: 'First Name (required)',
    lastName: 'Last Name',
    email: 'Email (required)',
    phoneNumber: 'Phone number',
    address: 'Address'
  };

  orderForm: FormGroup | undefined;

  get firstName(): AbstractControl | null {
    if (!this.orderForm) {
      return null;
    }
    return this.orderForm.get('firstName');
  }

  get lastName(): AbstractControl | null {
    if (!this.orderForm) {
      return null;
    }
    return this.orderForm.get('lastName');
  }

  get email(): AbstractControl | null {
    if (!this.orderForm) {
      return null;
    }
    return this.orderForm.get('email');
  }

  get phoneNumbers(): FormArray | null {
    if (!this.orderForm) {
      return null;
    }
    return this.orderForm.get('phoneNumbers') as FormArray;
  }

  get pickup(): AbstractControl | null {
    if (!this.orderForm) {
      return null;
    }
    return this.orderForm.get('pickup');
  }

  get address(): AbstractControl | null {
    if (!this.orderForm) {
      return null;
    }
    return this.orderForm.get('address');
  }

  constructor(private fb: FormBuilder,
              public errorMessageService: ErrorMessageService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.orderForm = this.fb.group({
      firstName: ['John', [Validators.required, Validators.minLength(3), CustomValidators.capitalLetter]],
      lastName: 'Doe',
      email: [
        'johndoe@mail.com',
        [Validators.required]
      ],
      phoneNumbers: this.fb.array([this.buildPhoneNumbers()]),
      pickup: true,
      address: ''
    });
  }

  private buildPhoneNumbers(): FormControl {
    return this.fb.control("",
        [Validators.required, Validators.pattern('[+][0-9]+')]
    );
  }

  onSave(): void {
    // Form model
    console.log(this.orderForm?.value);
  }

  onAddPhoneNumber(): void {
    if (this.phoneNumbers) {
      this.phoneNumbers.push(this.buildPhoneNumbers());
    }
  }

  onRemovePhoneNumber(index: number): void {
    if (this.phoneNumbers) {
      this.phoneNumbers.removeAt(index);
    }
  }
}

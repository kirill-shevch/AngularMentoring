import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderModel } from '../../models/order.model';

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
    return this.orderForm!.get('firstName');
  }

  get lastName(): AbstractControl | null {
    return this.orderForm!.get('lastName');
  }

  get email(): AbstractControl | null {
    return this.orderForm!.get('email');
  }

  get phoneNumber(): AbstractControl | null {
    return this.orderForm!.get('phoneNumber');
  }

  get pickup(): AbstractControl | null {
    return this.orderForm!.get('pickup');
  }

  get address(): AbstractControl | null {
    return this.orderForm!.get('address');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.orderForm = this.fb.group({
      firstName: ['John', [Validators.required, Validators.minLength(3)]],
      lastName: 'Doe',
      email: [
        'johndoe@mail.com',
        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'), Validators.email]
      ],
      phoneNumber: [
        '+12223334455',
        [Validators.required, Validators.pattern('[+][0-9]+')]
      ],
      pickup: false,
      address: ''
    });
  }


  onSave(): void {
    // Form model
    console.log(this.orderForm);
  }

}

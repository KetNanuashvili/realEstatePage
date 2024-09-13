import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, PasswordValidator } from '../model/validators';

@Injectable({
  providedIn: 'root'
})
export class FormGroupService {

  constructor(private fb: FormBuilder) {}

  listRegistrationForm(): FormGroup {
    return this.fb.group({
      sell: ['', Validators.required],
      rent: ['', Validators.required],
      Address: ['', Validators.required],
      emailIndex: ['', Validators.required],
      region: ['', Validators.required],
      city: ['', Validators.required],
      price: ['', Validators.required],
      countOfRoom: ['', Validators.required],
      area: ['', Validators.required],
      description: ['', Validators.required],
      imageFile: ['', Validators.required],
      agent: ['', Validators.required],
    });
  }
  // createLoginForm(): FormGroup {
  //   return this.fb.group({
  //     login: ['', [Validators.required, Validators.email, emailValidator()]],
  //     memberisedpassword: ['', Validators.required]
  //   });
  // }


}

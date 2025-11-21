import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn {
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"))])
  });

  errorMessages = {
    email: {
      required: 'Email is required',
      email: 'Please enter a valid email address'
    },
    password: {
      required: 'Password is required',
      pattern: 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)'
    }
  };
  errors: string[] = [];

  onSubmit() {
    if (this.validate() && this.signInForm.valid) {

    }
  }

  validate(): boolean {
    // clear error messages
    this.errors = [];
    let isValid = true;

    // validate email
    if(!this.signInForm.controls.email.valid){
      if(this.signInForm.controls.email.errors!['required'] != null){
        this.errors.push(this.errorMessages.email.required);
        isValid = false;
      }
      if(this.signInForm.controls.email.errors!['email'] != null){
        this.errors.push(this.errorMessages.email.email);
        isValid = false;
      }
    }

    //validate password
    if(!this.signInForm.controls.password.valid){
      if(this.signInForm.controls.password.errors!['required'] != null){
        this.errors.push(this.errorMessages.password.required);
        isValid = false;
      }
      if(this.signInForm.controls.password.errors!['pattern'] != null){
        this.errors.push(this.errorMessages.password.pattern);
        isValid = false;
      }
    }

    return isValid;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


import { UserService } from '../../services/user.service';
import { MustMatch } from '../../Validators/validator';
import { User } from '../../models/User';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, ValidationErrors } from '@angular/forms';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // registerForm: FormGroup;

  // exceptionMessage : ExceptionMessage = new ExceptionMessage();
  submitted = false;

  characterCountLeft$;
  maxCharCount = 280;
  user: User = new User();
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {

  }
  //     //Second Parameter
  // //      {
  // //   validator: passwordMatch
  // // }
  //      );
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required]),
      countryCode: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])

    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
    
  }
  get f(){
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted= true;
    console.log(this.registerForm.value);
    if (false) {
      return;
    } else {
      console.log("FORM VALID");
      console.log(this.registerForm.value);
      this.user.name = this.registerForm.get('name').value;
      this.user.password = this.registerForm.get('password').value;
      this.user.email = this.registerForm.get('email').value;
      this.user.number = this.registerForm.get('phoneNumber').value;
      this.userService.signUp(this.user).subscribe(data => {
        console.log(data);

        this.router.navigateByUrl('/login');
      })
    }
  }
}
// function passwordMatch(formGroup: FormGroup): ValidationErrors | undefined {
//   const passwordControl = formGroup.get('password');
//   const confirmPasswordControl = formGroup.get('confirmPassword');

//   if (passwordControl.value === confirmPasswordControl.value) {
//     return null;
//   } else {
//     return {
//       passwordMatch: true
//     }
//   }


// }





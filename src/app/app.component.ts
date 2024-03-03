import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'section-15';
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  forbiddenUsernames = ['Kris', 'Anna'];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this))
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.signupForm.valueChanges.subscribe((status) => {
      console.log(status);
    });
    this.signupForm.statusChanges.subscribe((status) => {
      console.log(status);
    });
    this.signupForm.setValue({
      'userData':{
        'username':'Max',
        'email':'max@mail.com'
      },
      'gender':'male',
      'hobbies':[]
    });
    this.signupForm.patchValue({
      'userData':{
        'username':'Anna'
      }
    })
  }
  onSubmit() {
    console.log(this.signupForm);
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
  forbiddenNames(control: AbstractControl): { [s: string]: boolean } | null {
    console.log(this.forbiddenUsernames.indexOf(control.value));
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return { 'nameIsForbidden': false };
  }
  forbiddenEmails(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const promise = new Promise<ValidationErrors | null>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@gmail.com') {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
  /*
------------------Templte driven-----------------
  @ViewChild('f') signupForm!: NgForm;
  defaultQuestion = 'pet';
  answer = '';
   user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
   genders = ['male', 'female'];
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    /*    this.signupForm.setValue({
          userData: {
            username: suggestedName,
            email: ''
          },
          secret: 'pet',
          questionAnswer: '',
          gender: 'male'
        })*/
  /*  this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    });
  }
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.answer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }
  */

}

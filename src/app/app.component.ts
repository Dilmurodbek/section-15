import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'section-15';
  genders = ['male', 'female'];
  signupForm!:FormGroup;
  ngOnInit(): void {
   
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

import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'section-15';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  onSubmit(form: NgForm) {
    console.log(form);
  }
}

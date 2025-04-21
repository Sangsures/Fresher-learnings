import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common'; // ✅ Import NgIf

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf], 
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  userForm: FormGroup = new FormGroup({
    fName: new FormControl("", [Validators.required]),
    lname: new FormControl("", [Validators.required, Validators.minLength(5)]),
    userName: new FormControl("",[Validators.required,Validators.pattern("")]),
    city: new FormControl(""),
    state: new FormControl("Tamil Nadu"),
    zip: new FormControl(),
    isAggree: new FormControl(false)
  });

  onUserSave() {
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
    } else {
      console.warn('Form is invalid:', this.userForm);
      this.userForm.markAllAsTouched(); 
    }
  }
}  
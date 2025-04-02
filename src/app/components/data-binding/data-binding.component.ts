import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = "John";
  rollNo: number= 12;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = "Enter a full name:"
  divClassName: string = "bg-primary";
  selectedCity: string = "";

  constructor() {
    console.log(this.firstName)
    this.isActive = false;
    console.log(this.isActive)
  }

  showWelcomeMessage () {
    alert("Welcome to Angular 19 Tutorials")
  }
  onCityChanges() {
    console.log("City Changed")
  }
}

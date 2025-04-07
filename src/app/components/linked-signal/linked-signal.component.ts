import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  templateUrl: './linked-signal.component.html',
  styleUrls: ['./linked-signal.component.css']
})
export class LinkedSignalComponent {
  firstName = signal<string>("Dhanush");
  lastName = signal<string>("Raj");

  // Computed property for full name
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  user = signal({ id: '111', name: "Dhanush" });

  // Computed property for email
  email = computed(() => `${this.user().name + this.user().id}@gmail.com`);

  changeName() {
    this.firstName.set("Rahul");
  }

  changeId() {
    this.user.set({ id: '123', name: "Dhanush" });
  }
}

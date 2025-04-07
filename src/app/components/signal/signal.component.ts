import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

  firstName = signal("Dhanush");
  lastName = signal<string>("Raj");
  courseName: string = "Angular";
  rollNo = signal<number>(1); 

  constructor() {
    setTimeout(() => {
      this.courseName = "React JS";
      this.firstName.set("Rahul");
    }, 5000); 
  }

  onIncrement() {
    this.rollNo.update(oldValue => oldValue + 1); 
  }
}

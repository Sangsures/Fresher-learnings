import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {
  div1Visible: boolean = true;
  isChecked: boolean = false;
  dayName: string = '';

  cityList: string [] = [
    "Chennai",
    "Coimbatore",
    "Erode",
    "Salem",
    "Trichy"
  ]

  hideShowDiv1(isShow: boolean) {
    this.div1Visible = isShow;
  }
}

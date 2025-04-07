import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control-statement',
  standalone: true, 
  imports: [FormsModule, CommonModule], 
  templateUrl: './control-statement.component.html',
  styleUrls: ['./control-statement.component.css']
})
export class ControlStatementComponent {
  div1Visible: boolean = true;
  isChecked: boolean = false;
  dayName: string = '';

  employeeArray: any[] = [
    {empId:121, name:'Fa',city: 'Mumbai', contactNo: '9876554324'},
    {empId:12, name:'John',city: 'New Delhi', contactNo: '7986543214'},
    {empId:98, name:'Aaryan',city: 'Kolkata', contactNo: '8765432148'},
    {empId:452, name:'Keshav',city: 'Bengaluru', contactNo: '9087645632'},
    {empId:2, name:'Sara',city: 'Pune', contactNo: '6789056743'}
  ]

  cityList: string[] = [
    "Chennai",
    "Coimbatore",
    "Erode",
    "Salem",
    "Trichy"
  ];

  hideShowDiv1(isShow: boolean) {
    this.div1Visible = isShow;
  }
}

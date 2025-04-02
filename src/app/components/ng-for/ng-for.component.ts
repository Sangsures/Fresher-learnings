import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {
  cityList: string[] = ["New Delhi", "Mumbai", "Kolkata", "Bengaluru", "Chennai"];

  employeeArray: any[] = [
    {empId:121, name:'Fa',city: 'Mumbai', contactNo: '9876554324'},
    {empId:12, name:'John',city: 'New Delhi', contactNo: '7986543214'},
    {empId:98, name:'Aaryan',city: 'Kolkata', contactNo: '8765432148'},
    {empId:452, name:'Keshav',city: 'Bengaluru', contactNo: '9087645632'},
    {empId:2, name:'Sara',city: 'Pune', contactNo: '6789056743'}
  ]
}

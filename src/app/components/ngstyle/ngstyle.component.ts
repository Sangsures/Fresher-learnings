import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngstyle',
  standalone: true,
  imports: [NgStyle, FormsModule],
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent {
  div1BckColor: string = 'red'; 
  isChecked: boolean = false;

  myCss: any = {
    'background-color': 'red',
    'width': '200px',
    'height': '200px'
  };

  addDiv1Color(color: string) {
    this.div1BckColor = color; 
  }
}

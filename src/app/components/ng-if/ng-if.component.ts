import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  divVisible: boolean = true;

  number1: string = '';
  number2 : string = '';

  hideDiv1 () {
    this.divVisible = false;
  }
  showDiv1 () {
    this.divVisible = true;
  }

}

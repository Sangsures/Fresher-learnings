import { Component } from '@angular/core';
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgClassComponent } from "./components/ng-class/ng-class.component";
import { NgstyleComponent } from "./components/ngstyle/ngstyle.component";
import { ControlStatementComponent } from "./components/control-statement/control-statement.component";
import { SignalComponent } from "./components/signal/signal.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet,RouterLink], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartutorial';
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() userTheme: string = " Создание";
 //@Output() userThemeChange = new EventEmitter<string>();
}

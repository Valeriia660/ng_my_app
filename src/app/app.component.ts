import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'k13r';
  theme:string=" Создание";
  id = 0;
  product = "";
  data = 0;
  price = 0;

  links: any[] = [];
}

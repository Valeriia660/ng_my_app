import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name2: string = "Создание интерактивного сайта астромагазина";

  id: number = 0;
  product: string = "";
  data: number = 0;
  price: number= 0;

  

  links: any[] = [];


}

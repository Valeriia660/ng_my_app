import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-models',
  template: '<h3>Модель{{id}}</h3>',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent {
  id: number = 0;
  product: string = "";
  data: number = 0;
  price: number= 0;
  routeSub: Subscription;
  querySub: Subscription;
  constructor(private activatedRoute: ActivatedRoute) {
    this.routeSub = this.activatedRoute. params.subscribe(params => {
      this.id = params["id"]
    });

    this.querySub = this.activatedRoute.queryParams.subscribe(qparams => {
      this.product = qparams["product"]
      this.data = qparams["data"]
      this.price = qparams["price"]
    });
  } 
}

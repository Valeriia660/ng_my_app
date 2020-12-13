import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fillmodel',
  templateUrl: './fillmodel.component.html',
  styleUrls: ['./fillmodel.component.css']
})
export class FillmodelComponent {
  models = {
    id: 0,
    product: "defauld",
    data: 0,
    price: 0,
  };

  constructor(private router: Router) {

  }

  links: any[] = [];
  
  addLink(models: any) {
    this.links.push({
      "id": models.id,
      "product": models.product,
      "data": models.data,
      "price": models.price
    })
  }
}
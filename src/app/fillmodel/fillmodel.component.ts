import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-fillmodel',
  templateUrl: './fillmodel.component.html',
  styleUrls: ['./fillmodel.component.css']
})
export class FillmodelComponent implements OnInit {
  model = {
    id: 0,
    name: "defauld",
    datetime: 0,
    price: 0,
  };

constructor(private router: Router) { }

ngOnInit(): void {
}

addModel() {
  this.router.navigate(["/"], {
    queryParams: {
      "id": this.model.id,
      "name": this.model.name,
      "datetime": this.model.datetime,
      "price": this.model.price,
    }
  })
}
}
import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../models/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatoes', 5)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngridientAdded(ingridient: Ingridient){
    this.ingridients.push(ingridient);
  }

}

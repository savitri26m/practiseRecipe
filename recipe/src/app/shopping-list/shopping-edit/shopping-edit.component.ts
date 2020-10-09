import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/models/ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInput: ElementRef; 
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef; 

  @Output() ingridientAdded = new EventEmitter<Ingridient>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngridient(){
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount =  this.amountInput.nativeElement.value;
    const newIng = new Ingridient(ingName, ingAmount);
    this.ingridientAdded.emit(newIng);

  }

}

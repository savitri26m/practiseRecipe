import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() recipeList: Recipe;

  @Output() recipeSelected = new EventEmitter<void>();

  selectRecipe(){
    this.recipeSelected.emit();
  }

}

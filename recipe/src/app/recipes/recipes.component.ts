import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.modal';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  recipeSelected(recipeEl: Recipe){
    this.selectedRecipe = recipeEl;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.modal';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() displaySelectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}

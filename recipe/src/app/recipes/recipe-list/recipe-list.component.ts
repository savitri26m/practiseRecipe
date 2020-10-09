import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe( 
      'Red Velvet Cake', 
    'First recipe', 
    'https://spoonacular.com/recipeImages/579247-556x370.jpg'),
  
    {
      name: 'Fruit Platter',
     description: 'Enjoy the taste of fresh and juicy fruits, at any time of the day !!', 
      imagePath: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&w=1000&q=80',
      
    },
  
    {
      name: 'Eggy Eggs', 
      description: 'Eggs all cozy in a garlic herbed yogurt, topped with a spicy coconut butter and sitting on a piece..!!', 
      imagePath: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&w=1000&q=80',
      
    }
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}

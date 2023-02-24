import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // This creates a new recipe based on our blueprint
    // This calls the constructor in the recipe.model
    new Recipe(
      'A test Recipe',
      'This is a test',
      'https://bbqgrillandsmoke.com/wp-content/uploads/2022/08/Grilled-Sandwich-Recipe-864x1536.png?ezimgfmt=ng:webp/ngcb1'
    ),
    new Recipe(
      'A test Recipe',
      'This is a test',
      'https://bbqgrillandsmoke.com/wp-content/uploads/2022/08/Grilled-Sandwich-Recipe-864x1536.png?ezimgfmt=ng:webp/ngcb1'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

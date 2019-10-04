import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Test Recipe','This is a test Recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-XpxPBbfsEQmMmmJvW_ugjqofhJm0Dktkr8OHcswN6IRuXxac'),
    new Recipe('Test Recipe','This is a test Recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-XpxPBbfsEQmMmmJvW_ugjqofhJm0Dktkr8OHcswN6IRuXxac')
  ];

  constructor() { }

  ngOnInit() {
   
  }

}

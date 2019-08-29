import { Injectable } from '@angular/core';
import { Item } from '../shared/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private selectedRecipe;//Returns value for selected recipe from array

  private recipe = [
    {
      name: "Scrambled Eggs",
      items: [
        {
          name: 'Eggs',
          link: '#',
          image: 'https://images.unsplash.com/photo-1491524062933-cb0289261700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80',
          description: 'A dozen eggs for scramblin',
          note: 'Get the cage free kind!',
          category: 'food',
          id: 'jkl'
        },
        {
          name: 'cheese',
          link: '#',
          image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          description: 'Block or shredded cheddar cheese',
          note: 'Chedder if they have it',
          category: 'food',
          id: 'mno'
        },
        {
          name: 'Butter',
          link: '#',
          image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/6/15/0/HE_butter_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371607415155.jpeg',
          description: 'A stick or bar of butter',
          note: 'Kerrygold Irish Butter, but any butter will do!',
          category: 'food',
          id: 'pqr'
        }
      ]
    },
    {
      name: "Steak Dinner",
      items: [
        {
          name: 'Steak'
        },
        {
          name: 'Sweet Potato'
        },
        {
          name: 'Broccoli'
        },
        {
          name: 'Butter'
        }
      ]
    },
    {
      name: "Strawberry Banana Smoothie",
      items: [
        {
          name: 'Strawberries'
        },
        {
          name: 'Bananas'
        },
        {
          name: 'Greek Yogurt'
        }
      ]
    }
  ];

  constructor() { }

  getRecipe(name: string) {
    console.log('Getting recipe!');
    this.recipe.map((recipe) => {
      if(recipe.name === name) {
        console.log(recipe)
        this.selectedRecipe = recipe;
      } else {
        return;
      } 
    });
    return this.selectedRecipe;
  }
}

import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Item } from '../shared/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private selectedRecipe;//Returns value for selected recipe from array

  private recipes = [
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
          name: 'Steak',
          link: 'https://www.instacart.com/stop-shop/products/17357579-stop-shop-boneless-ribeye-steak-1-per-lb',
          image: 'https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c3d005fb-61b5-450c-a0e2-51277a85bda3.jpg',
          description: 'Stop & Shop Boneless Ribeye Steak',
          note: 'If you can, get 2 of these!',
          category:'food',
          id: 'stu'

        },
        {
          name: 'Sweet Potato',
          link: '#',
          image: 'https://www.wikihow.com/images/thumb/5/59/Roast-Sweet-Potatoes-Step-1-Version-3.jpg/aid935456-v4-728px-Roast-Sweet-Potatoes-Step-1-Version-3.jpg',
          description: "Sweet potatoes, they have purple skin and orange insides!",
          note: 'If they have the japanese yellow sweet potatoes, get those!',
          category:'food',
          id: 'vwx'

        },
        {
          name: 'Broccoli',
          link: 'https://www.instacart.com/stop-shop/products/3253874-broccoli-crown-each',
          image: 'https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_388ce210-17ad-402c-bc88-a4e245d17591.jpg',
          description: 'Fresh Broccoli Crowns',
          note: 'Get 3 of these',
          category:'food',
          id: 'yzb'

        },
        {
          name: 'Butter',
          link: '#',
          image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/6/15/0/HE_butter_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371607415155.jpeg',
          description: 'A stick or bar of butter',
          note: 'Kerrygold Irish Butter, but any butter will do!',
          category: 'food',
          id: 'bab'
        }
      ]
    }
  ];

  constructor(private databaseService: DatabaseService) { }

  getRecipies() {
    return this.recipes;
  }

  getSingleRecipe(name: string) {
    console.log('Getting recipe!');
    this.recipes.map((recipe) => {
      if(recipe.name === name) {
        console.log(recipe)
        this.selectedRecipe = recipe;
      } else {
        return;
      } 
    });
    return this.selectedRecipe;
  }

  /* May be used to check if items are already added to the list before they're added to the database */
  addRecipeItems(items) {
    console.log("Adding recipe items...", items);
    this.databaseService.addRecipeItems(items);
  }
}

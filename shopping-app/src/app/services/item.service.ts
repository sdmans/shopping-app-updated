import { Injectable } from '@angular/core';
import { Item } from '../shared/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

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
          image: 'https://images-na.ssl-images-amazon.com/images/I/51vVwocc7eL.jpg',
          description: 'Kerrygold Irish Butter',
          note: 'Any butter will do, this image was easiest',
          category: 'food',
          id: 'pqr'
        }
      ]
    },
    {

    }
  ]

  constructor() { }

  addRecipe() {
    return this.recipe;
  }
}

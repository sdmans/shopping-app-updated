/* 
Item should have a similar model to this:
Item Name: String
Description: String
Link?: String
Notes?: String
LastOrdered?: String
*/

export class Item {
    id?: string;
    name: string;
    link?: string;
    image: string;
    category: string;
    price?: number;
    checked?: boolean; 
    priority?: string;
    description?: string;
    note?: string;
    favorited?: boolean;
    quantity?: number;
    datePosted?: number;
    lastOrdered?: number;
    orderedBy?: String;
    purchasedBy?: string;
}
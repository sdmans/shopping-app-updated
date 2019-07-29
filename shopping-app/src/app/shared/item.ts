/* Item should have a similar model to this:

Item Name: String
Description: String
Link?: String
Notes?: String
LastOrdered?: String
*/
export class Item {
    id?: string;
    name: string;
    link: string;
    image: string;
    description?: string;
    notes?: string;
    category: string;
    quantity?: number;
    datePosted?: number;
    lastOrdered?: number;
    purchasedBy?: string;
}
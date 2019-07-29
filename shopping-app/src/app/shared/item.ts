/* Item should have a similar model to this:

Item Name: String
Description: String
Link?: String
Notes?: String
LastOrdered?: String
*/
export class Item {
    name: string;
    Description: string;
    link: string;
    notes?: string;
    quantity?: number;
    lastOrdered?: number;
    purchasedBy?: string;
}
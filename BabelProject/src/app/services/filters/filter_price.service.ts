import { Injectable } from "@angular/core";

export interface DataFilterPrice {
    price: number;
    id: number;
}

@Injectable({providedIn: 'root'})
export class FilterPriceService{

    private _price : DataFilterPrice[] = [
        {price: 10, id: 1},
        {price: 25, id: 2},
        {price: 50, id: 3},
        {price: 100, id: 4},
        {price: 250, id: 5},
        {price: 251, id: 6}
    ]

    constructor(){}

    get price(){
        return this._price.slice();
    }

}
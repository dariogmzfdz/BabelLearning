import { Injectable } from "@angular/core";

export interface DataFilterYear {
    year: string;
    imgPath: string;
    id: number;
}


@Injectable({providedIn: 'root'})
export class FilterYearService{

}
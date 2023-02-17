import { Injectable } from "@angular/core";

export interface DataFilter {
    year: string;
    imgPath: string;
}


@Injectable({providedIn: 'root'})
export class FilterYearService{

}
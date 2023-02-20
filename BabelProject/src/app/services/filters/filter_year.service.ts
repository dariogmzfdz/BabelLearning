import { Injectable } from "@angular/core";

export interface DataFilterYear {
    year: string;
    imgPath: string;
    id: number;
}


@Injectable({providedIn: 'root'})
export class FilterYearService{

    constructor(){}

    private _cars: DataFilterYear[] = [
        {year: 'Until 1949', imgPath: '../../../assets/img/filters/byYear/1940-1949.jpg', id: 1},
        {year: 'From 1950 to 1959', imgPath: '../../../assets/img/filters/byYear/1950-1959.jpg', id: 2},
        {year: 'From 1960 to 1969', imgPath: '../../../assets/img/filters/byYear/1960-1969.jpg', id: 3},
        {year: 'From 1970 to 1979', imgPath: '../../../assets/img/filters/byYear/1970-1979.jpg', id: 4},
        {year: 'From 1980 to 1989', imgPath: '../../../assets/img/filters/byYear/1980-1989.jpg', id: 5},
        {year: 'From 1990 to 1999', imgPath: '../../../assets/img/filters/byYear/1990-1999.jpg', id: 6},
        {year: 'From 2000 to 2009', imgPath: '../../../assets/img/filters/byYear/2000-2009.jpg', id: 7},
        {year: 'From 2010 to 2019', imgPath: '../../../assets/img/filters/byYear/2010-2019.jpg', id: 8},
        {year: 'From 2020 until nowadays', imgPath: '../../../assets/img/filters/byYear/2020-2029.jpg', id: 9},
    ];

    get cars(){
        return this._cars.slice();
    }
}
import { Injectable } from "@angular/core";

export interface DataFilterScale {
    scale: number;
    imgPath: string;
    id: number;
}

@Injectable({providedIn: 'root'})
export class FilterScaleService{

    private _scale : DataFilterScale[] = [
        {scale: 12, imgPath: '../../../assets/img/filters/byScale/megamenu_1_12.png', id: 1},
        {scale: 18, imgPath: '../../../assets/img/filters/byScale/megamenu_1_18.png', id: 2},
        {scale: 24, imgPath: '../../../assets/img/filters/byScale/megamenu_1_24.png', id: 3},
        {scale: 43, imgPath: '../../../assets/img/filters/byScale/megamenu_1_43.png', id: 4},
        {scale: 64, imgPath: '../../../assets/img/filters/byScale/megamenu_1_64.jpg', id: 5}
    ]

    constructor(){}

    get scale(){
        return this._scale.slice();
    }

}
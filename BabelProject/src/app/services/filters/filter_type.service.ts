import { Injectable } from "@angular/core";

export interface DataFilterType {
    category: string,
    content: {
        name: string,
        imgUrl: string,
        id: number
    }[]
}


@Injectable({providedIn: 'root'})
export class FilterTypeService{

    private _type: DataFilterType[] = [
        {category: 'Public service', 
        content: [
            {name: 'Ambulances', imgUrl: '../../../assets/img/filters/byType/ambulance.jpg', id: 1},
            {name: 'Buses', imgUrl: '../../../assets/img/filters/byType/autobuses.jpg', id: 2},
            {name: 'Firefighters', imgUrl: '../../../assets/img/filters/byType/bomberopeq.jpg', id: 3},
            {name: 'Trucks', imgUrl: '../../../assets/img/filters/byType/camionpeq.jpg', id: 4},
            {name: 'Construction', imgUrl: '../../../assets/img/filters/byType/construccion.jpg', id: 5},
            {name: 'Limousines', imgUrl: '../../../assets/img/filters/byType/limusinapeq.jpg', id: 6},
            {name: 'Military', imgUrl: '../../../assets/img/filters/byType/militarpeq.jpg', id: 7},
            {name: 'Police', imgUrl: '../../../assets/img/filters/byType/polipeq.jpg', id: 8},
            {name: 'Taxi', imgUrl: '../../../assets/img/filters/byType/taxipeq.jpg', id: 9},
            ]
        },
        {category: 'Movie cars', 
        content: [
            {name: '60 seconds', imgUrl: '../../../assets/img/filters/byType/60segpeq.jpg', id: 1},
            {name: 'Batman', imgUrl: '../../../assets/img/filters/byType/batmanpeq.jpg', id: 2},
            {name: 'Christine', imgUrl: '../../../assets/img/filters/byType/christpeq.jpg', id: 3},
            {name: 'The A-Team', imgUrl: '../../../assets/img/filters/byType/equipoapeq.jpg', id: 4},
            {name: 'Elvis Presley', imgUrl: '../../../assets/img/filters/byType/elvispeq.jpg', id: 5},
            {name: 'Fast and Furious', imgUrl: '../../../assets/img/filters/byType/fastpeq.jpg', id: 6},
            {name: 'Return to the Future', imgUrl: '../../../assets/img/filters/byType/regresopeq.jpg', id: 7},
            {name: 'Transformers', imgUrl: '../../../assets/img/filters/byType/transformerspeq.jpg', id: 8},
            {name: 'Other movie cars', imgUrl: '../../../assets/img/filters/byType/otherMoviesCars.jpg', id: 9},
            ]
        },
        {category: 'Competition vehicles', 
        content: [
            {name: 'Rally', imgUrl: '../../../assets/img/filters/byType/rallypeq.jpg', id: 1},
            {name: '24h Le Mans', imgUrl: '../../../assets/img/filters/byType/lemanspeq.jpg', id: 2},
            {name: 'Formula 1', imgUrl: '../../../assets/img/filters/byType/f1peq.jpg', id: 3},
            {name: 'Fernando Alonso', imgUrl: '../../../assets/img/filters/byType/alonsopeq.jpg', id: 4},
            {name: 'Carlos Sainz', imgUrl: '../../../assets/img/filters/byType/sainzpeq.jpg', id: 5},
            {name: 'GT Sports', imgUrl: '../../../assets/img/filters/byType/racing.jpg', id: 6},
            ]
        },
        {category: 'Motorcycles and bikes', 
        content: [
            {name: 'See all', imgUrl: '../../../assets/img/filters/byType/motoybicipeq.jpg', id: 1},
            {name: 'Harley Davidson', imgUrl: '../../../assets/img/filters/byType/harleypeq.jpg', id: 2},
            {name: 'Vespa Scooter', imgUrl: '../../../assets/img/filters/byType/vespapeq.jpg', id: 3},
            {name: 'MotoGP', imgUrl: '../../../assets/img/filters/byType/motogppeq.jpg', id: 4},
            ]
        }
    ]

    constructor(){}

    get type(){
        return this._type.slice();
    }

}
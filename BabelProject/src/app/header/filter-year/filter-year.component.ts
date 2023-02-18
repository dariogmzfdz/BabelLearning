import { Component, OnInit } from '@angular/core';
import { DataFilter } from 'src/app/services/filters/filter_year.service';


@Component({
  selector: 'app-filter-year',
  templateUrl: './filter-year.component.html',
  styleUrls: ['./filter-year.component.css']
})
export class FilterYearComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  cars: DataFilter[] = [
    {year: 'Until 1949', imgPath: '../../../assets/img/filters/byYear/1940-1949.jpg'},
    {year: 'From 1950 to 1959', imgPath: '../../../assets/img/filters/byYear/1950-1959.jpg'},
    {year: 'From 1960 to 1969', imgPath: '../../../assets/img/filters/byYear/1960-1969.jpg'},
    {year: 'From 1970 to 1979', imgPath: '../../../assets/img/filters/byYear/1970-1979.jpg'},
    {year: 'From 1980 to 1989', imgPath: '../../../assets/img/filters/byYear/1980-1989.jpg'},
    {year: 'From 1990 to 1999', imgPath: '../../../assets/img/filters/byYear/1990-1999.jpg'},
    {year: 'From 2000 to 2009', imgPath: '../../../assets/img/filters/byYear/2000-2009.jpg'},
    {year: 'From 2010 to 2019', imgPath: '../../../assets/img/filters/byYear/2010-2019.jpg'},
    {year: 'From 2020 until nowadays', imgPath: '../../../assets/img/filters/byYear/2020-2029.jpg'},
  ];

}


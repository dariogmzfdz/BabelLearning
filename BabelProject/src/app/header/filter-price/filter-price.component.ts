import { Component, OnInit } from '@angular/core';
import { DataFilterPrice } from 'src/app/services/filters/filter_price.service';

@Component({
  selector: 'app-filter-price',
  templateUrl: './filter-price.component.html',
  styleUrls: ['./filter-price.component.css']
})
export class FilterPriceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  price : DataFilterPrice[] = [
    {price: 10, id: 1},
    {price: 25, id: 2},
    {price: 50, id: 3},
    {price: 100, id: 4},
    {price: 250, id: 5},
    {price: 251, id: 6}
  ]

}

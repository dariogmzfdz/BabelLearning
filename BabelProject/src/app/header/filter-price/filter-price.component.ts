import { Component, OnInit } from '@angular/core';
import { FilterPriceService } from 'src/app/services/filters/filter_price.service';

@Component({
  selector: 'app-filter-price',
  templateUrl: './filter-price.component.html',
  styleUrls: ['./filter-price.component.css']
})
export class FilterPriceComponent implements OnInit {

  constructor(private filterPrice: FilterPriceService) { }

  price = this.filterPrice.price;

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FilterYearService } from 'src/app/services/filters/filter_year.service';


@Component({
  selector: 'app-filter-year',
  templateUrl: './filter-year.component.html',
  styleUrls: ['./filter-year.component.css']
})
export class FilterYearComponent implements OnInit {
  
  constructor(private filterYear: FilterYearService) { }

  cars = this.filterYear.cars;

  ngOnInit(): void {
  }


}


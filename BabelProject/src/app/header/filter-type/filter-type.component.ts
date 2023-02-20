import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { FilterTypeService } from 'src/app/services/filters/filter_type.service';

@Component({
  selector: 'app-filter-type',
  templateUrl: './filter-type.component.html',
  styleUrls: ['./filter-type.component.css']
})
export class FilterTypeComponent implements OnInit {

  constructor(private filterType: FilterTypeService) { }
  type = this.filterType.type;

  ngOnInit(): void {

  }

}

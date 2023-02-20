import { Component, OnInit } from '@angular/core';
import { FilterScaleService } from 'src/app/services/filters/filter_scale.service';

@Component({
  selector: 'app-filter-scale',
  templateUrl: './filter-scale.component.html',
  styleUrls: ['./filter-scale.component.css']
})
export class FilterScaleComponent implements OnInit {

  constructor(private filterScale: FilterScaleService) { }

  scale = this.filterScale.scale;

  ngOnInit(): void {
    console.log(this.scale);
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import {MatInputModule} from '@angular/material/input';
import { FilterYearComponent } from './header/filter-year/filter-year.component';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { FilterBrandComponent } from './header/filter-brand/filter-brand.component';
import { FilterScaleComponent } from './header/filter-scale/filter-scale.component';
import { FilterPriceComponent } from './header/filter-price/filter-price.component';
import { FilterTypeComponent } from './header/filter-type/filter-type.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilterYearComponent,
    FilterBrandComponent,
    FilterScaleComponent,
    FilterPriceComponent,
    FilterTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

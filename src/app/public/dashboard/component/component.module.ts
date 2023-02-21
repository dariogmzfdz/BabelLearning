import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product_list/product-item/product-item.component';
import { ProductDescriptionComponent } from './product_list/product_item/product-description/product-description.component';
import { ProductCommentsComponent } from './product_list/product_item/product-comments/product-comments.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductDescriptionComponent,
    ProductCommentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }

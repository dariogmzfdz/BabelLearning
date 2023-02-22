import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { InternalTradeComponent } from './internal-trade/internal-trade.component';
import { UsersListComponent } from './users-list/users-list.component';



@NgModule({
  declarations: [
    MenuComponent,
    ProductRegisterComponent,
    InternalTradeComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModulePrivate { }

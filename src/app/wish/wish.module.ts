import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WishSymbolComponent } from './wish-symbol/wish-symbol.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishSymbolItemComponent } from './wish-symbol-item/wish-symbol-item.component';
import { WishComponent } from './wish.component';


@NgModule({
  declarations: [
    WishSymbolComponent,
    WishFilterComponent,
    WishSymbolItemComponent,
    WishComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    WishComponent
  ]
})
export class WishModule { }

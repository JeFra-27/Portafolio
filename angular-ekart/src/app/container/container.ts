import { Component, ViewChild } from '@angular/core';
import { Search } from "./search/search";
import { ProductList } from "./product-list/product-list";
import { ProductDetail } from "./product-detail/product-detail";
import { FeaturedBrands } from "./featured-brands/featured-brands";

@Component({
  selector: 'container',
  imports: [Search, ProductList, ProductDetail, FeaturedBrands],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
  
  searchText: string = '';

  @ViewChild('ProductList')productList: ProductList;
  
  setSearchText(value: string){
    this.searchText = value;
  }
  
}

import { Component, Input } from '@angular/core';
import { Item } from '../../Models/Item';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  @Input() productListComp: ProductList = undefined;

  product: Item;

  ngOnInit(){
    this.product = this.productListComp.selectedProduct;
  }

}

import { Input } from '@angular/core';
import { Component} from '@angular/core';
import { Item } from '../../../Models/Item';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  @Input() 
  product:Item;
}

import { Component, Input } from '@angular/core';
import { Product } from './product/product';
import { Filter } from "./filter/filter";
import { Item } from '../../Models/Item';

@Component({
  selector: 'product-list',
  imports: [Product, Filter],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  selectedProduct: Item;
 products = [
  {
  "id": 1,
  "name": "Treecko",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "brand": "NIKE",
  "gender": "MEN",
  "category": "RUNNING",
  "size": [6, 7, 8, 9, 10],
  "color": ["white", "blue", "black"],
  "price": 252,
  "discountPrice":200,
  "is_in_inventory": true,
  "items_left": 3,
  "imageURL": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/252.png",
  "slug": "nike-react-infinity-run-flyknit"
  },
  {
  "id": 2,
  "name": "Groovyle",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "brand": "NIKE",
  "gender": "MEN",
  "category": "RUNNING",
  "size": [6,10],
  "color": ["green", "brown", "black"],
  "price": 253,
  "is_in_inventory": true,
  "items_left": 3,
  "imageURL": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/253.png",
  "slug": "nike-react-infinity-run-flyknit"
  },
  {
  "id": 3,
  "name": "Sceptile",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "brand": "NIKE",
  "gender": "MEN",
  "category": "RUNNING",
  "size": [6, 7, 8, 9, 10],
  "color": ["white", "blue", "black"],
  "price": 254,
  "is_in_inventory": false,
  "items_left": 0,
  "imageURL": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/254.png",
  "slug": "nike-react-infinity-run-flyknit"
  },
  {
  "id": 4,
  "name": "Nike React Infinity Run Flyknit",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "brand": "NIKE",
  "gender": "MEN",
  "category": "RUNNING",
  "size": [6, 7, 8, 9, 10],
  "color": ["white", "blue", "black"],
  "price": 160,
  "is_in_inventory": true,
  "items_left": 3,
  "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/11-6655a5a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
  "slug": "nike-react-infinity-run-flyknit"
  },
  {
  "id": 5,
  "name": "Nike React Infinity Run Flyknit",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "brand": "NIKE",
  "gender": "MEN",
  "category": "RUNNING",
  "size": [6, 7, 8, 9, 10],
  "color": ["white", "blue", "black"],
  "price": 160,
  "is_in_inventory": true,
  "items_left": 3,
  "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/11-6655a5a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
  "slug": "nike-react-infinity-run-flyknit"
  },
  {
  "id": 6,
  "name": "Nike React Miller",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "brand": "NIKE",
  "gender": "MEN",
  "category": "RUNNING",
  "size": [6, 7, 8, 9, 10],
  "color": ["white", "blue", "black"],
  "price": 160,
  "is_in_inventory": true,
  "items_left": 3,
  "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/11-6655a5a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
  "slug": "nike-react-infinity-run-flyknit"
  },
  {
  "id": 7,
  "name": "Nike React Infinity Run Flyknit",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "brand": "NIKE",
  "gender": "MEN",
  "category": "RUNNING",
  "size": [6, 7, 8, 9, 10],
  "color": ["white", "blue", "black"],
  "price": 160,
  "is_in_inventory": true,
  "items_left": 3,
  "imageURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/11-6655a5a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
  "slug": "nike-react-infinity-run-flyknit"
  },
  {
  "id": 8,
  "name": "Un gaelo para llevar",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "brand": "ITSON",
  "gender": "MEN",
  "category": "Correrse",
  "size": [6, 7, 8, 9, 10],
  "color": ["white", "blue", "black"],
  "price": 200,
  "is_in_inventory": true,
  "items_left": 3,
  "imageURL": "https://scontent.fcen4-1.fna.fbcdn.net/v/t1.6435-9/54729064_382617825893699_7960562342280822784_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UYrAXrjhYewQ7kNvwFfSjpg&_nc_oc=AdnVrHwfiWANTHgJwEIGrgk5SIjqH8j8CVCyAaMgZwPGSp50IHl5ZlVG-kKLQ0y3HtieUME8E08TjMME68LDSHdr&_nc_zt=23&_nc_ht=scontent.fcen4-1.fna&_nc_gid=3yPtXBM5YCfCrDylxCbFgQ&oh=00_AfZTxoJlW4JCzrbqKBiCtq1sfe63d0m0NjYdBUmckU5U6g&oe=68F9A11C",
  "slug": "nike-react-infinity-run-flyknit"
  }  
 ];

 totalProductCount =  this.products.length;
 totalProductInStock = this.products.filter(p => p.is_in_inventory === true).length;
 totalProductOutOfStock = this.products.filter(p => p.is_in_inventory === false).length;

 @Input()
 searchText: string = '';
 
 selectedFilterRadioButton: string = 'all';
 
 onFilterChanged(value : string){
  this.selectedFilterRadioButton = value;
 }
}

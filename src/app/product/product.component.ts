import { Component } from '@angular/core';
import { Product } from '../modals/product';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  productName:string = "Cake";
  productPrice:number = 100;
  
  product:Product = {productName: 'Cake', price: 100 , stockCount: 1 }
}

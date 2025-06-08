import { Component } from '@angular/core';
import { Product } from '../modals/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RedHighlightDirective } from '../directives/red-highlight.directive';

@Component({
  selector: 'app-product',
  imports: [FormsModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: true
})
export class ProductComponent {

    product: Product = {
      productName: 'Chocoloate Cake',
      price: 100,
      stockCount: 2,
      imgUrl: 'https://www.shutterstock.com/image-photo/chocolate-cake-berries-260nw-394680466.jpg',
      description: 'A rich, moist, and decadent chocolate cake layered with velvety chocolate ganache and topped with a smooth, creamy frosting. Made with premium cocoa and fresh ingredients, this indulgent dessert melts in your mouth with every bite. Perfect for chocolate lovers and special occasions alike.'
    }
  

}

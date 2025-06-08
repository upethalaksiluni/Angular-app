import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { Product } from '../modals/product';

@Component({
  selector: 'app-product-container',
  imports: [ProductComponent],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss'
})
export class ProductContainerComponent {
  chocolatecake: Product = {
      productName: 'Chocoloate Cake',
      price: 100,
      stockCount: 2,
      imgUrl: 'https://www.shutterstock.com/image-photo/chocolate-cake-berries-260nw-394680466.jpg',
      description: 'A rich, moist, and decadent chocolate cake layered with velvety chocolate ganache and topped with a smooth, creamy frosting. Made with premium cocoa and fresh ingredients, this indulgent dessert melts in your mouth with every bite. Perfect for chocolate lovers and special occasions alike.'
    }

  vanilacake: Product = {
    productName: 'Vanila Cake',
    price: 100,
    stockCount: 2,
    imgUrl: 'https://imgs.search.brave.com/5f1S26kRaqvPBfCywP528mueTLYS2dxbM6wRp399Pco/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdj/ZG4uZmxvd2VyYXVy/YS5jb20vRFNDXzgw/MTkuanBn',
    description: 'A rich, moist, and decadent chocolate cake layered with velvety chocolate ganache and topped with a smooth, creamy frosting. Made with premium cocoa and fresh ingredients, this indulgent dessert melts in your mouth with every bite. Perfect for chocolate lovers and special occasions alike.'
  }
}

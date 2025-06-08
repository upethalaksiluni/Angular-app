import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-product-container',
  imports: [ProductComponent],
  templateUrl: './product-container.component.html',
  styleUrl: './product-container.component.scss'
})
export class ProductContainerComponent {

}

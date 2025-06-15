import { Component, inject } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public cartService: CartService) {}

  loggerService = inject(LoggerService);

  ngOnInit() {
    console.log("Home component initialized");
  }
  
  ngOnDestroy() {
    console.log("Home component destroyed"); 
  }

  ngDoCheck() {
    console.log("Home component changed detection triggered");
  }

  ngOnChanges() {
    console.log("Home component changes dectected");
  }

  count=0;
  

  increment() {
    this.loggerService.log("Increment clicked");
    
    console.log(this.cartService.count());
    

    let count = this.cartService.count() + 1;
    
    this.cartService.count.set(count);
}

decrement() {
    this.loggerService.log("Decrement clicked");
    
    console.log(this.cartService.count());
    

    let count = this.cartService.count() - 1;
    
    this.cartService.count.set(count);
}
}
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Observable<Product[]>;
  constructor(private store: Store<AppState>) {
    this.products = this.store.select(state => state.product);
    console.log(" this.products", this.products)
  }
  addProduct(name: any, price: any) {
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <Product>{
        name: name,
        price: price
      }
    });
  }
  ngOnInit() {
  }
}

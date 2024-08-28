import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component {
  products: Observable<Product[]>;
  constructor(private store: Store<AppState>) {
    this.products = this.store.select(state => state.product);
    console.log(" this.products", this.products)
  }
}

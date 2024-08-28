import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { Product2Component } from './product2/product2.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'produtstable', component: Product2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

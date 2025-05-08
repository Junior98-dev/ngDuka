import { Component, input } from '@angular/core';
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-products',
  imports: [ProductListComponent],
  template: `
    <main class="max-width">
     <app-product-list [sectionTitle]="category()" [query]="category()" /> 
    </main>
  `,
  styles: ``
})
export default class ProductsComponent {
  category = input('category');
}

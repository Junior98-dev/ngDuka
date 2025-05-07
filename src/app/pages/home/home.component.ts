import { Component } from '@angular/core';
import { ProductListComponent } from "../products/product-list/product-list.component";

@Component({
  selector: 'app-home',
  imports: [ProductListComponent],
  template: `
    <section align="center" class="hero-container">
      <h2>Bienvenue sur ngDuka</h2>
      <h3>Une boutique en ligne pour demo http client en Angular</h3>
      <input placeholder="Recherche dans ngSoko" type="text" />
    </section>
    <app-product-list/>
  `,
  styles: `
    .hero-container {
      background: linear-gradient(to right,#FF7F7F, #FFB6C1);
      padding: 2rem;
    
      input {
        padding: 1rem;
        width: 30%;
        border-radius: 5px;
        border: none;
        box-shadow: 0px 0px 5px #00000026;

        &:focus {
          outline: none;
        }
      }
    }
  `,
})
export default class HomeComponent {}

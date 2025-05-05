import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer>
      <div class="footer-container max-width">
        <div class="left-container">
          <div>
            <p><b>PRODUITS</b></p>
            <a routerLink="/products/electronics">Electroniques</a>  
            <a routerLink="/products/jewelery">Bijoux</a>  
            <a routerLink="/products/men's clothing">Vêtements pour hommes</a>
            <a routerLink="/products/women's clothing">Vêtements pour femmes</a>  
          </div>
        </div>

        <div class="rigth-container"></div>
      </div>
    </footer>
  `,
  styles: ``
})
export class FooterComponent {

}

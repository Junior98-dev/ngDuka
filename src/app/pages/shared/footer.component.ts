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
          <div>
            <p><b>LIENS</b></p>
            <a routerLink="/about">Tutoriel youtube</a>
            <a routerLink="/contact">Code github</a>
            <a routerLink="/faq">FAQ</a>
          </div>
        </div>

        <div class="rigth-container">
          <p>
            <b>ngDuka {{ date.getFullYear() }}</b> <br />
            Développé par Junior Kounkoud
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: `
    footer {
      background-color: #e4e4e4;
    }
    .footer-container {
      display: flex;
      justify-content: space-between;
      align-items: end;
      padding: 2rem;
      flex-wrap: wrap;
      gap: 3rem;

      .left-container {
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;
      }

      a {
        display: block;
        margin: 0.5rem 0;
      }
    }
  `,
})
export class FooterComponent {
  date = new Date();
}

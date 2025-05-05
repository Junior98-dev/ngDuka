import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <section align="center" class="hero-container">
      <h2>Bienvenue sur ngDuka</h2>
      <h3>Une boutique en ligne pour demo http client en Angular</h3>
      <input placeholder="Recherche dans ngSoko" type="text"/>
    </section>
  `,
  styles: ``,
})
export default class HomeComponent {}

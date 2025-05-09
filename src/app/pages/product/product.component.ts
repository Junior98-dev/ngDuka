import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styles: ``,
})
export default class ProductComponent implements OnInit, OnDestroy {
  product?: Product;
  loading = signal(true);
  route = inject(ActivatedRoute);
  api = inject(ApiService);
  title = inject(Title);
  routeSub?: Subscription;

  ngOnInit(): void {
    this.routeSub = this.route.params
      .pipe(switchMap((params) => this.api.getProductById(params['id'])))
      .subscribe((product) => {
        this.product = product;
        this.title.setTitle(`${product.title} - ngDuka`);
        this.loading.set(false);
      });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
}

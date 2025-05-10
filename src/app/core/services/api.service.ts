import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API = 'https://fakestoreapi.com';
  http = inject(HttpClient);
  cartProductCount = signal(0);

  getProductsByCategory(category: string, limitCount?: number) {
    const queryParams = limitCount ? `?limit=${limitCount}` : '';
    return this.http.get<Product[]>(
      `${this.API}/products/category/${category}${queryParams}`
    );
  }

  getProducts = () => {
    return this.http.get<Product[]>(`${this.API}/products/`);
  };

  getProductById = (id:number) => {
    return this.http.get<Product>(`${this.API}/products/${id}`);
  }
}

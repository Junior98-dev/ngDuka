import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API = 'https://fakestoreapi.com';
  http = inject(HttpClient); 


}

import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subscription } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Product } from './../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService
{
  constructor(private httpClient: HttpClient) { }
  
  save(product: Product) : Observable<Product>
  {
    return !product.id ? this.httpClient.post<Product>(environment.PRODUCT_API_BASEURL, product)
                       : this.httpClient.put<Product>(`${environment.PRODUCT_API_BASEURL}/${product.id}`, product);
  }

  fetch() : Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(environment.PRODUCT_API_BASEURL);
  }

  getById(id: number) : Observable<Product>
  {
    return this.httpClient
               .get<Product>(`${environment.PRODUCT_API_BASEURL}/${id}`)
               .pipe(
                  catchError(this.handleError)
               );
  }

  delete(id: number) : Observable<Product>
  {
    return this.httpClient
               .delete<Product>(`${environment.PRODUCT_API_BASEURL}/${id}`)
               .pipe(
                  catchError(this.handleError)
               );
  }

  handleError(err: HttpErrorResponse) : Observable<any>
  {
    return of(null);
  }
}

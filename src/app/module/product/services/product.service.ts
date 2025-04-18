import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrl } from '../../../../app/environment/environment';
import {
  CategoryMagicObject,
  DataMagicObject,
  MagicObject,
} from '../interface/productInterfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  private cartKey = 'cart';
  private cartChanged = new BehaviorSubject<MagicObject[]>(this.getCart());
  cart$ = this.cartChanged.asObservable();

  constructor() {}

  getMagicObjects(page: number, size: number): Observable<DataMagicObject> {
    return this.http.get<DataMagicObject>(
      `${baseUrl}/magicobject/?page=${page}&size=${size}`
    );
  }
  getCategoryMagicObjects(): Observable<CategoryMagicObject> {
    return this.http.get<CategoryMagicObject>(`${baseUrl}/category/`);
  }

  getMagicObjectByIdCategory(
    idCategoria: string,
    page?: string
  ): Observable<DataMagicObject> {
    return this.http.get<DataMagicObject>(
      `${baseUrl}/magicobject/?category=${idCategoria}&page=${page}&size=4`
    );
  }
  searchMagicObjectByName(
    name: string,
    page: string
  ): Observable<DataMagicObject> {
    return this.http.get<DataMagicObject>(
      `${baseUrl}/magicobject/search?query=${name}&page=${page}&size=4`
    );
  }
  getCart(): any[] {
    try {
      if (typeof window !== 'undefined' && 'localStorage' in window) {
        const data = localStorage.getItem(this.cartKey);
        return data ? JSON.parse(data) : [];
      }
    } catch (e) {
      console.error('Error al acceder a localStorage:', e);
    }
    return [];
  }

  addToCart(magicObject: MagicObject) {
    const cart = this.getCart();
    const existingItem = cart.find((item) => item.id === magicObject.id);

    if (!existingItem) {
      cart.push({ ...magicObject });
    }

    localStorage.setItem(this.cartKey, JSON.stringify(cart));
    this.cartChanged.next(cart);
  }
  removeItem(id: number) {
    const cart = this.getCart().filter((item) => item.id !== id);
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
    this.cartChanged.next(cart);
  }
  clearCart() {
    localStorage.removeItem(this.cartKey);
    this.cartChanged.next([]);
  }
}

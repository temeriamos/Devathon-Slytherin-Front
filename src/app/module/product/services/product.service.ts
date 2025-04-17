import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../../../app/environment/environment';
import {
  CategoryMagicObject,
  DataMagicObject,
} from '../interface/productInterfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
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
}

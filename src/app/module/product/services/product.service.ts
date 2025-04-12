import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../../../app/environment/environment';
import { DataMagicObject } from '../interface/productInterfaces';

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
}

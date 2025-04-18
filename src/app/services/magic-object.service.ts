import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment ';
import { Observable } from 'rxjs';
import { MagicObject } from '../interfaces/magic-object';

@Injectable({
  providedIn: 'root'
})
export class MagicObjectService {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  constructor() { }

  getAllMagicObj(page:number, size:number): Observable<MagicObject>{
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());

    return this.http.get<MagicObject>(`${this.apiUrl}/magicobject/`,{params})
  }
}

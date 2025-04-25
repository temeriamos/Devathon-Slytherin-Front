import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrl } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  http = inject(HttpClient);
  viewModalObjetRarity$ = new BehaviorSubject<boolean>(false);

  newSale(bodySale: any): Observable<string> {
    return this.http.post(`${baseUrl}/sale/`, bodySale, {
      responseType: 'text',
    });
  }
  registerUser(bodyUser: any): Observable<string> {
    return this.http.post(`${baseUrl}/user/`, bodyUser, {
      responseType: 'text',
    });
  }
  getObjectRarity(id: any): Observable<any> {
    return this.http.get<any>(`${baseUrl}/magicobject/rarity?rarity=${id}`);
  }
}

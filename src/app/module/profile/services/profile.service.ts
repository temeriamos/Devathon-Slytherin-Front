import { inject, Injectable } from "@angular/core";
import { baseUrl } from '../../../../app/environment/environment';
import { HttpClient } from "@angular/common/http";

// Ensure the ProfileService class or function is exported properly
@Injectable({
  providedIn: 'root',
})
export class ProfileService {

    http = inject(HttpClient);

    //obtener el perfil del usuario pasando id del usuario
    getUser(id: string) {
        return this.http.get(`${baseUrl}/user/${id}`);
    }

    //obtener el historial de compras del usuario
    getPurchaseHistory(id: string) {
        return this.http.get(`${baseUrl}/sale/history/${id}`);
    }
    
}
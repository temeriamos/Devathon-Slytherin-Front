import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { ProfileService } from '../../services/profile.service';
import { UserService } from 'src/app/services/user.service';
import { get } from 'http';
import {
  MagicObject,
} from '../../../product/interface/productInterfaces';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

  productDetail: MagicObject | null = null;
  ProfileService = inject(ProfileService);
  userService = inject(UserService);
  stateModal = false;
  loading = true;
  dataUser: { id: string, name: string, price_galeon: string, price_sickle: string, price_knut: string, imageBase64: string} | null = null;
  respSale: string = '';
  magicObjects: any[] = [];  // Aquí guardaremos el historial de compras del usuario

  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  ngOnInit() {
    this.getUser();
    this.getUserHistoryPurchase();
  }
  getDetailProduct(id: number) {
    this.productDetail = this.magicObjects.find(
      (magicObject) => magicObject.id === id
    ) as MagicObject;
  }
  getUser() {
    
    const userData = localStorage.getItem('dataUser');
    this.dataUser = userData ? JSON.parse(userData) : null;

    if (!this.dataUser) {
      this.respSale = 'Por favor, seleccione un usuario';
      return;
    }
  }
  getUserHistoryPurchase() {
    const userName = this.dataUser?.name ?? '';
    this.ProfileService.getPurchaseHistory(userName).subscribe(
      (data: any) => {
        this.magicObjects = Array.isArray(data) ? data : []; 
        console.log(this.magicObjects);
      },
      (error) => {
        console.error('Error al obtener el historial de compras:', error);
      }
    );
  }

}

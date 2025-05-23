import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { CarProductComponent } from './shared/components/car-product/car-product.component';
import { BtnObjectRarityComponent } from './shared/components/btn-object-rarity/btn-object-rarity.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ModalObjectRarityComponent } from './shared/components/modal-object-rarity/modal-object-rarity.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoadingComponent,
    CarProductComponent,
    BtnObjectRarityComponent,
    NavbarComponent,
    ModalObjectRarityComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Devathon-Slytherin-Front';
}

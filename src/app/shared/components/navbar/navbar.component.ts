import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { LoaderService } from '../../services/loader-service.service';
import { ProductService } from 'src/app/module/product/services/product.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  LoaderService = inject(LoaderService);
  ProductService = inject(ProductService);
  cart: any[] = [];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  user: User = {
    id: 1,
    name: 'Visitante',
    price_galeon: 0,
    price_sickle: 0,
    price_knut: 0,
    house: {
      id: 1,
      name: 'Gryffindor',
    },
  };

  userService = inject(UserService);
  ngOnInit(): void {
    this.userService.getUserId(1).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('❌ Error al traer usuario', err);
      },
    });
    this.ProductService.cart$.subscribe((cart) => {
      this.cart = cart;
    });
  }

  viewCarModal() {
    this.LoaderService.viewCarModal();
  }
}

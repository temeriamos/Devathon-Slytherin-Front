import { Component, inject } from '@angular/core';
import { LoaderService } from '../../services/loader-service.service';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/module/product/services/product.service';

@Component({
  selector: 'app-car-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-product.component.html',
  styleUrl: './car-product.component.css',
})
export class CarProductComponent {
  viewCarModal$ = this.loaderService.viewCarModal$;
  ProductService = inject(ProductService);
  cart: any[] = [];
  constructor(private readonly loaderService: LoaderService) {}

  ngOnInit() {
    this.ProductService.cart$.subscribe((cart) => {
      this.cart = cart;
    });
  }
  closeCarModal() {
    this.loaderService.hideCarModal();
  }
  removeItem(id: any) {
    this.ProductService.removeItem(id);
  }
}

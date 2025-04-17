import { Component, inject } from '@angular/core';
import { LoaderService } from '../../services/loader-service.service';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/module/product/services/product.service';
import { SharedService } from '../../services/shared.service';

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
  SharedService = inject(SharedService);
  cart: any[] = [];
  respSale: string = '';
  constructor(private readonly loaderService: LoaderService) {}

  ngOnInit() {
    this.ProductService.cart$.subscribe((cart) => {
      this.cart = cart;
    });
  }
  closeCarModal() {
    this.loaderService.hideCarModal();
    this.respSale = '';
  }
  removeItem(id: any) {
    this.ProductService.removeItem(id);
  }
  newSale() {
    const bodySale = {
      user_id: 4,
      total_galeon: 100,
      total_sickle: 100,
      total_knut: 100,
      items: this.cart.map((item) => {
        return {
          object_id: item.id,
          price_galeon: item.price_galeon,
          price_sickle: item.price_sickle,
          price_knut: item.price_knut,
        };
      }),
    };
    this.SharedService.newSale(bodySale).subscribe(
      (resp: string) => {
        this.respSale = 'Venta realizada con éxito';
        setTimeout(() => {
          this.ProductService.clearCart();
          this.loaderService.hideCarModal();
        }, 2000);
      },
      (error) => {
        this.respSale = 'Error: User does not have enough balance';
      }
    );
  }
}

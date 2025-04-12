import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ProductService } from '../../services/product.service';
import { MagicObject } from '../../interface/productInterfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  ProductService = inject(ProductService);
  magicObjects: MagicObject[] = [];
  totalPagesArray: number[] = [];
  currentPage = 1;
  loading = true;
  constructor() {
    const currentPage = localStorage.getItem('currentPageProduct') || 0;
    if (currentPage) {
      this.currentPage = Number(currentPage);
    }
    this.getMagicObjects(this.currentPage, 4);
  }

  getMagicObjects(page: number, size: number) {
    this.ProductService.getMagicObjects(page, size).subscribe((data) => {
      this.magicObjects = data.magic_objects;
      this.setTotalPages(data.size);
      setInterval(() => {
        this.loading = false;
      }, 1000);
    });
  }
  setTotalPages(count: number) {
    this.totalPagesArray = Array.from({ length: count }, (_, i) => i + 1);
  }
  goToPage(page: number) {
    if (page < 1) return;
    if (page > this.totalPagesArray.length) return;
    this.getMagicObjects(page, 4);
    this.currentPage = page;
    localStorage.setItem('currentPageProduct', page.toString());
  }
}

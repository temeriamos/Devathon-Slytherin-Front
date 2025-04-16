import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ProductService } from '../../services/product.service';
import {
  CategoryMagicObject,
  MagicObject,
} from '../../interface/productInterfaces';
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
  listCategoryMagicObjects: CategoryMagicObject[] = [];
  productDetail: MagicObject | null = null;
  stateModal = false;
  constructor() {
    const currentPage = localStorage.getItem('currentPageProduct') || 0;
    if (currentPage) {
      this.currentPage = Number(currentPage);
    }
    this.getMagicObjects(this.currentPage, 4);
    this.getCategoryMagicObjects();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  getMagicObjects(page: number, size: number) {
    this.ProductService.getMagicObjects(page, size).subscribe((data) => {
      this.magicObjects = data.magic_objects;

      this.setTotalPages(data.page);
      setInterval(() => {
        this.loading = false;
      }, 1000);
    });
  }
  setTotalPages(count: number) {
    this.totalPagesArray = Array.from({ length: count }, (_, i) => i);
  }
  goToPage(page: number) {
    if (page < 0) return;
    if (page > this.totalPagesArray.length - 1) return;
    this.getMagicObjects(page, 4);
    this.currentPage = page;
    localStorage.setItem('currentPageProduct', page.toString());
  }

  getCategoryMagicObjects() {
    this.ProductService.getCategoryMagicObjects().subscribe(
      (data: CategoryMagicObject) => {
        this.listCategoryMagicObjects = Array.isArray(data) ? data : [data];
      }
    );
  }
  getMagicObjectByIdCategory(category: any) {
    if (category === 'all') {
      this.getMagicObjects(1, 4);
      return;
    }
    this.ProductService.getMagicObjectByIdCategory(category).subscribe(
      (data) => {
        this.totalPagesArray = Array.from(
          { length: data.size },
          (_, i) => i + 1
        );
        this.magicObjects = data.magic_objects;
        this.setTotalPages(data.page);
        this.currentPage = 1;
        localStorage.setItem('currentPageProduct', '1');
      }
    );
  }
  getDetailProduct(id: number) {
    this.productDetail = this.magicObjects.find(
      (magicObject) => magicObject.id === id
    ) as MagicObject;
  }
}

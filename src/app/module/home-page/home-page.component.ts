import { Component, inject, OnInit } from '@angular/core';
import { SliderComponent } from './components/slider/slider.component';
import { ProductService } from '../product/services/product.service';
import { MagicObject } from '../product/interface/productInterfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SliderComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  ProductService = inject(ProductService);
  magicObjects: MagicObject[] = [];
  imgProducSelected = '';
  stateModal = false;
  productDetail: MagicObject | null = null;
  visible = false;
  sliderImages: string[] = [];

  ngOnInit(): void {
    this.getMagicObjects();
  }
  getMagicObjects() {
    this.ProductService.getMagicObjects(0, 100).subscribe((data) => {
      const allObjects = data.magic_objects;
      this.sliderImages = allObjects.map(
        (magicObject) => magicObject.url_image
      );

      this.magicObjects = [...allObjects]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
    });
  }
  addToCart(objetoMagico: MagicObject) {
    this.imgProducSelected = objetoMagico.url_image;
    this.ProductService.addToCart(objetoMagico);
    this.visible = true;
  }
  close() {
    this.visible = false;
  }
  getDetailProduct(id: number) {
    this.productDetail = this.magicObjects.find(
      (magicObject) => magicObject.id === id
    ) as MagicObject;
  }
}

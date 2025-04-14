import { Routes } from '@angular/router';
import { ProductPageComponent } from './module/product/pages/product-page/product-page.component';
import { HomePageComponent } from './module/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'product',
    component: ProductPageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'product',
  },
  {
    path: 'home',
    pathMatch: 'full',
    component:HomePageComponent
  },
  {
    path: '**',
    redirectTo: 'product',
  },
];

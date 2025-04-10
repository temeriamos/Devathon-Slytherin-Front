import { Routes } from '@angular/router';
import { ProductPageComponent } from './module/product/pages/product-page/product-page.component';

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
    path: '**',
    redirectTo: 'product',
  },
];

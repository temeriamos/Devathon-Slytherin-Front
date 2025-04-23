import { Routes } from '@angular/router';
import { ProductPageComponent } from './module/product/pages/product-page/product-page.component';
import { HomePageComponent } from './module/home-page/home-page.component';
import { ProfilePageComponent } from './module/profile/pages/profile-page/profile-page.component';

export const routes: Routes = [
  {
    path: 'product',
    component: ProductPageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: 'profile',
    pathMatch: 'full',
    component: ProfilePageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

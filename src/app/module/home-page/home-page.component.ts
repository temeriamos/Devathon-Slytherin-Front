import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { SliderComponent } from "./components/slider/slider.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, SliderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}

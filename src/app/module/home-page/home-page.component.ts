import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { SliderComponent } from "./components/slider/slider.component";
import { UserService } from 'src/app/services/user.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, SliderComponent,HttpClientModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {


  constructor(private userService : UserService){

  }

  ngOnInit(): void {

    this.userService.getAllUser().subscribe({
      next: (data: any) => {
        console.log('✅ Conexión exitosa. Datos recibidos:', data);
      },
      error: (err: any) => {
        console.error('❌ Error en la conexión:', err);
      }
    });
  }
}

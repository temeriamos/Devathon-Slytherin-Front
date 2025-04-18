import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { LoaderService } from '../../services/loader-service.service';
import { ProductService } from 'src/app/module/product/services/product.service';
import { SharedService } from '../../services/shared.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  LoaderService = inject(LoaderService);
  ProductService = inject(ProductService);
  SharedService = inject(SharedService);
  cart: any[] = [];
  modalOpenLogin = false;
  modalOpenRegister = false;
  msgErrorForm = false;
  registroExitoso = false;
  @ViewChild('nicknameUserLogin', { static: false })
  nicknameUserLogin!: ElementRef;
  selectedImage: File | null = null;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  user: User = {
    id: 1,
    name: 'Visitante',
    price_galeon: 0,
    price_sickle: 0,
    price_knut: 0,
    house: {
      id: 1,
      name: 'Gryffindor',
    },
    imageBase64: '../../../../assets/img/foto_user_visitante.png',
  };

  userService = inject(UserService);
  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nickname: ['', [Validators.required]],
      price_galleon: [0, [Validators.required, Validators.min(0)]],
      price_sickle: [0, [Validators.required, Validators.min(0)]],
      price_knut: [0, [Validators.required, Validators.min(0)]],
      img_user: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.ProductService.cart$.subscribe((cart) => {
      this.cart = cart;
    });
    const nickname = localStorage.getItem('nickname');
    if (!nickname) {
      this.user = this.user;
      return;
    }

    this.userService.getUserId(nickname).subscribe({
      next: (data) => {
        this.user = data;
        localStorage.setItem('dataUser', JSON.stringify(data));
      },
      error: (err) => {
        console.error('❌ Error al traer usuario', err);
      },
    });
  }

  viewCarModal() {
    this.LoaderService.viewCarModal();
  }

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedImage = file;
    }
  }

  registerUser() {
    if (this.registroForm.valid) {
      const formData = this.registroForm.value;

      const formDataToSend = new FormData();

      formDataToSend.append('name', formData.nickname);
      formDataToSend.append('price_galeon', formData.price_galleon);
      formDataToSend.append('price_sickle', formData.price_sickle);
      formDataToSend.append('price_knut', formData.price_knut);

      if (this.selectedImage && this.selectedImage.size > 500 * 1024) {
        alert('La imagen no puede superar los 500KB');
        return;
      }

      if (this.selectedImage) {
        formDataToSend.append('image', this.selectedImage);
      }

      this.SharedService.registerUser(formDataToSend).subscribe({
        next: (data) => {
          this.registroExitoso = true;
          this.modalOpenRegister = false;
          setTimeout(() => {
            this.registroExitoso = false;
          }, 5000);
          this.registroForm.reset();
          this.selectedImage = null;
        },
        error: (err) => {
          console.error('❌ Error al registrar usuario', err);
        },
      });
    } else {
      this.msgErrorForm = true;
    }
  }

  loginUser() {
    const nickname = this.nicknameUserLogin.nativeElement.value;
    localStorage.setItem('nickname', nickname);
    this.userService.getUserId(nickname).subscribe({
      next: (data) => {
        this.user = data;
        this.modalOpenLogin = false;
        localStorage.setItem('dataUser', JSON.stringify(data));
      },
      error: (err) => {
        console.error('❌ Error al traer usuario', err);
      },
    });
  }
}

import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent {
  isLoading$ = this.loaderService.isLoading$;
  constructor(private readonly loaderService: LoaderService) {}
}

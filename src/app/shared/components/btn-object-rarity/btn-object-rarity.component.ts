import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoaderService } from '../../services/loader-service.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-btn-object-rarity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-object-rarity.component.html',
  styleUrl: './btn-object-rarity.component.css',
})
export class BtnObjectRarityComponent {
  LoaderService = inject(LoaderService);

  sharedService = inject(SharedService);
  isVisible = true;
  private intervalId: any;
  private timeoutId: any;

  ngOnInit(): void {
    this.showAndHide();
    this.intervalId = setInterval(() => this.showAndHide(), 30000); // 30 seconds
  }

  showAndHide(): void {
    const el = document.getElementById('btnObjectRarity');
    if (!el) return;

    el.classList.remove('hidden');
    this.timeoutId = setTimeout(() => {
      el.classList.add('hidden');
    }, 15000); // 15 seconds
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    clearTimeout(this.timeoutId);
  }
  openModal(): void {
    this.sharedService.viewModalObjetRarity$.next(true);
  }
}

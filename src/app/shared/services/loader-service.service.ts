import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoading$ = new Subject<boolean>();
  viewCarModal$ = new Subject<boolean>();

  showLoader(): any {
    this.isLoading$.next(true);
  }

  hideLoader(): any {
    this.isLoading$.next(false);
  }
  viewCarModal(): any {
    this.viewCarModal$.next(true);
  }
  hideCarModal(): any {
    this.viewCarModal$.next(false);
  }
}

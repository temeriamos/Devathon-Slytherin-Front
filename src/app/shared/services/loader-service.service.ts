import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoading$ = new Subject<boolean>();

  showLoader(): any {
    this.isLoading$.next(true);
  }

  hideLoader(): any {
    this.isLoading$.next(false);
  }
}

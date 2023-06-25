import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  map,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'rxjs-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Count: {{ count$ | async }}</p>
    <p>DoubleCount: {{ doubleCount$ | async }}</p>
    <button (click)="increment()">Increment</button>
    <button (click)="fetchDoubleCount()">Log doubleCount</button>
  `,
})
export class RxjsCounterComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  public count$: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  private effect$ = this.count$.pipe(
    tap((count) => console.log('Count updated: ', count))
  );
  
  public doubleCount$: Observable<number> = this.count$.pipe(
    map((count) => count * 2)
  );

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  fetchDoubleCount() {
    this.doubleCount$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => console.log("doubleCount:", value));
  }

  increment() {
    this.count$.next(this.count$.value + 1);
  }
}

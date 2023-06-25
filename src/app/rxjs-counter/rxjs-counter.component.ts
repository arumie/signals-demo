import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  map,
  take,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'rxjs-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Count: {{ effect$ | async }}</p>
    <p>DoubleCount: {{ doubleCount$ | async }}</p>
    <button (click)="increment()">Increment</button>
    <button (click)="fetchDoubleCount()">Log doubleCount</button>
  `,
})
export class RxjsCounterComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  public countSub$: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  public effect$ = this.countSub$.pipe(
    tap((count) => console.log('RxJS - Count updated: ', count))
  );
  
  public doubleCount$: Observable<number> = this.countSub$.pipe(
    map((count) => count * 2)
  );

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  fetchDoubleCount() {
    this.doubleCount$
      .pipe(take(1))
      //.pipe(takeUntil(this.destroy$))
      .subscribe((value) => console.log("RxJS - doubleCount:", value));
  }

  increment() {
    this.countSub$.next(this.countSub$.value + 1);
  }
}

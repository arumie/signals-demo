import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  combineLatest,
  map,
  take,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'rxjs-derived-value',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>DerivedValue: {{ derivedValue$ | async }}</p>
    <button (click)="changeValues()">Increment</button>
  `,
})
export class RxjsDerivedValueComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  private valueOne$ = new BehaviorSubject<number>(1);
  private valueTwo$ = new BehaviorSubject<number>(2);

  public derivedValue$: Observable<number> = combineLatest([
    this.valueOne$,
    this.valueTwo$,
  ])
    .pipe(map(([one, two]) => one * two))
    .pipe(tap((value) => console.log('RxJS - derivedValue:', value)));

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  changeValues() {
    this.valueOne$.next(2);
    this.valueTwo$.next(4);
  }
}

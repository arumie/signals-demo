import { CommonModule } from '@angular/common';
import { Component, OnDestroy, signal, computed, effect } from '@angular/core';
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
  selector: 'signal-derived-value',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>DerivedValue: {{ derivedValue() }}</p>
    <button (click)="changeValues()">Increment</button>
  `,
})
export class SignalDerivedValueComponent {
  private valueOne = signal(1);
  private valueTwo = signal(2);

  public derivedValue = computed(() => this.valueOne() * this.valueTwo());

  constructor() {
    effect(() => console.log('Signals - derivedValue: ', this.derivedValue()));
  }

  changeValues() {
    this.valueOne.set(2);
    this.valueTwo.set(4);
  }
}

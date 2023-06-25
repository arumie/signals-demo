import { CommonModule } from '@angular/common';
import { Component, OnDestroy, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  map,
  takeUntil
} from 'rxjs';

@Component({
  selector: 'signal-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Count: {{ count() }}</p>
    <p>DoubleCount: {{ doubleCount() }}</p>
    <button (click)="increment()">Increment</button>
    <button (click)="fetchDoubleCount()">Log doubleCount</button>
  `,
})
export class SignalCounterComponent {
  public count: WritableSignal<number> = signal(0);
  public doubleCount: Signal<number> = computed(() => this.count() * 2);

  constructor() {
    effect(() => console.log("Count updated: ", this.count()));
  }

  fetchDoubleCount() {
    console.log("DoubleCount: ", this.doubleCount());
  }

  increment() {
    this.count.set(this.count() + 1);
  }
}

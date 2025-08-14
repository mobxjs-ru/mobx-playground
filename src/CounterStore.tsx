import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get isDivisibleByThree() {
    return this.count !== 0 && this.count % 3 === 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}

export const counterStore = new CounterStore();

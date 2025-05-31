import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
    console.log("Rendering with count:", this.count);
  }

  decrement() {
    this.count--;
    console.log("Rendering with count:", this.count);
  }

}
export const counterStore = new CounterStore();
console.log(counterStore.count)

// export const stringStore = new StringStore();
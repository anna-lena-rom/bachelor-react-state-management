import { translations } from '../i18n/translations';
import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

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

export interface Person {
  id: string;
  name: string;
  lastName: string;
  age: number;
  plz: string;
  street: string;
}

class PersonStore {
  name = '';
  lastName = '';
  age = 0;
  plz = '';
  street = '';
  list: Person[] = [];
  filter = '';

  constructor() {
    makeAutoObservable(this);
  }

  setName(newName: string) {
    this.name = newName;
  }

  setLastName(newLastName: string) {
    this.lastName = newLastName;
  }

  setAge(newAge: number) {
    this.age = newAge;
  }

  setPlz(newPlz: string) {
    this.plz = newPlz;
  }

  setStreet(newStreet: string) {
    this.street = newStreet;
  }

  setFilter(newFilter: string) {
    this.filter = newFilter;
  }

  addPerson() {
    const newPerson: Person = {
      id: uuidv4(),
      name: this.name,
      lastName: this.lastName,
      age: this.age,
      plz: this.plz,
      street: this.street,
    };
    this.list.push(newPerson);

    this.name = '';
    this.lastName = '';
    this.age = 0;
    this.plz = '';
    this.street = '';
  }
}

export const personStore = new PersonStore();

const themes = {
  light: 'light',
  dark: 'dark',
};

class ThemeStore {
  mode = themes.light;

  constructor() {
    makeAutoObservable(this);
  }

  toggleMode = () => {
    if (this.mode === themes.dark) {
      this.mode = themes.light;
    } else {
      this.mode = themes.dark;
    }
    return this;
  };
}

export const themeStore = new ThemeStore();

class LanguageStore {
  value: 'en' | 'de' = 'en';

  constructor() {
    makeAutoObservable(this);
  }

  toggleLanguage = () => {
    this.value = this.value === 'en' ? 'de' : 'en';
    return this;
  };

  get t() {
    return translations[this.value];
  }
}

export const languageStore = new LanguageStore();

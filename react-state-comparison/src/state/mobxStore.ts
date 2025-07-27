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

class PersonStore {
  id = '';
  name = '';
  lastName = '';
  age = 0;
  plz = '';
  street = '';
  list: any;

  constructor() {
    makeAutoObservable(this);
  }

  setName(newName: string) {
    this.name = newName;
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
}

export const languageStore = new LanguageStore();

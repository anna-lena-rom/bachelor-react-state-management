import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialCounterState: CounterState = { value: 0 };
//const initialState: CounterState = { value: 0 };


const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  //initialState,
  reducers: {
    increment: state => { state.value += 1; },
    decrement: state => { state.value -= 1; },
  },
});

interface LanguageState {
  value: 'en' | 'de';
}

const initialLanguageState: LanguageState = { value: 'en' };

const languageSlice = createSlice({
  name: 'language',
  initialState: initialLanguageState,
  reducers: {
    toggleLanguage: (state) => {
      state.value = state.value === 'en' ? 'de' : 'en';
    },
  },
});

interface ThemeState {
  value: 'light' | 'dark';
}

const initialThemeState: ThemeState = { value: 'light' };

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialThemeState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.value = action.payload;
    },
  },
});

export interface Person {
  id: string;
  name: string;
  lastName: string;
  age: number;
  plz: string;
  street: string;
}

interface PersonState {
  list: Person[];
}

const initialPersonState: PersonState = {
  list: [],
};

const personSlice = createSlice({
  name: 'person',
  initialState: initialPersonState,
  reducers: {
    addPerson: (state, action: PayloadAction<Person>) => {
      state.list.push(action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    counter: counterSlice.reducer,
    language: languageSlice.reducer,
    person: personSlice.reducer,
  },
});

export const { increment, decrement } = counterSlice.actions;
export const { toggleLanguage } = languageSlice.actions;
export const { addPerson } = personSlice.actions;
export const { toggleTheme, setTheme } = themeSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

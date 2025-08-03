import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils'

type ThemeMode = 'light' | 'dark';
//export const uiStateAtom = atom<ThemeMode>('system');
export const themeAtom = atomWithStorage<ThemeMode>('theme', 'light');

type Language = 'en' | 'de'; // oder weitere Sprachen
export const languageAtom = atomWithStorage<Language>('language', 'en');

export type Person = {
  id: string;
  name: string;
  lastName: string;
  age: number;
  plz: string;
  street: string;
};
export const personListAtom = atom<Person[]>([]);
export const nameAtom = atom('');
export const lastNameAtom = atom('');
export const ageAtom = atom(0);
export const plzAtom = atom('');
export const streetAtom = atom('');
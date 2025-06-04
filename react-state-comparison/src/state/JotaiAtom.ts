import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils'

export const jotaiCountAtom = atom<number>(0);
//export const jotaiStringAtom = atom<string>('Jotai String');

type ThemeMode = 'light' | 'dark';
//export const uiStateAtom = atom<ThemeMode>('system');
export const themeAtom = atomWithStorage<ThemeMode>('theme', 'light');

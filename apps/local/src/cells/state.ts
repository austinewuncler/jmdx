import { observable, ObservableObject } from '@legendapp/state';

export interface Cell {
  code: string;
  id: string;
  syntax: 'jsx' | 'md';
}

export type CellSyntax = Cell['syntax'];
export type CellObservable = Pick<ObservableObject<Cell>, 'syntax'>;

export const $cells = observable<Cell[]>([]);

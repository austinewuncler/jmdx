import { observable } from '@legendapp/state';

export interface Cell {
  code: string;
  id: string;
  syntax: 'jsx' | 'md';
}

export type CellSyntax = Cell['syntax'];

export const $cells = observable<Cell[]>([]);

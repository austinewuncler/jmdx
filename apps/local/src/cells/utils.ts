import { nanoid } from 'nanoid';

import { Cell, CellSyntax } from './state';

export const createCells = (syntaxArray: CellSyntax[]) =>
  syntaxArray.map<Cell>((syntax) => ({ code: '', id: nanoid(), syntax }));

import { createContext } from 'react';

import { CellObservable } from './state';

export interface CellItemContext {
  $cell?: CellObservable;
}

export const cellItemContext = createContext<CellItemContext>({});

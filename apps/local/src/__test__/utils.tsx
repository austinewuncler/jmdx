import { observable } from '@legendapp/state';
import { render, RenderOptions } from '@testing-library/react';
import { nanoid } from 'nanoid';
import React, { ReactElement } from 'react';

import { cellItemContext } from '~/cells/context';
import { Cell, CellObservable } from '~/cells/state';

type ExtendedRenderOptions = Omit<RenderOptions, 'wrapper'>;

export const renderWithProviders = (
  ui: ReactElement,
  options: ExtendedRenderOptions = {},
) => {
  const $cell = observable<Cell[]>([
    { code: '', id: nanoid(), syntax: 'jsx' },
  ])[0] as CellObservable;

  return {
    ...render(ui, {
      ...options,
      wrapper: ({ children }) => (
        <cellItemContext.Provider value={{ $cell }}>
          {children}
        </cellItemContext.Provider>
      ),
    }),
    $cell,
  };
};

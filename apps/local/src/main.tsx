import './index.css';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CellList, ClearCellListButton, InsertCell } from './cells/components';
import { ToggleDarkModeButton } from './theme/components';

const rootDiv = document.querySelector('#root');

if (rootDiv)
  createRoot(rootDiv).render(
    <StrictMode>
      <header className="flex h-16 items-center justify-between px-4">
        <ClearCellListButton />
        <ToggleDarkModeButton />
      </header>
      <main className="flex flex-col gap-4 px-4 py-8 sm:container sm:mx-auto sm:px-0">
        <InsertCell />
        <CellList />
      </main>
    </StrictMode>,
  );

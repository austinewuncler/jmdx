import './index.css';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CellList, ClearCellListButton, InsertCell } from './cells/components';
import { ToggleDarkModeButton } from './theme/components';

const rootDiv = document.querySelector('#root');

if (rootDiv)
  createRoot(rootDiv).render(
    <StrictMode>
      <header className="sticky top-0 flex h-16 items-center justify-between bg-white px-4 transition-colors dark:bg-black">
        <ClearCellListButton />
        <ToggleDarkModeButton />
      </header>
      <main className="flex flex-col gap-4 px-4 py-8 sm:container sm:mx-auto sm:px-0">
        <InsertCell />
        <CellList />
      </main>
    </StrictMode>,
  );

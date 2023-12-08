import './index.css';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ClearCellListButton } from './cells/components';

const rootDiv = document.querySelector('#root');

if (rootDiv)
  createRoot(rootDiv).render(
    <StrictMode>
      <header className="flex h-16 items-center px-4">
        <ClearCellListButton />
      </header>
    </StrictMode>,
  );

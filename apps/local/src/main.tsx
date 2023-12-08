import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ClearCellList } from './cells/components';

const rootDiv = document.querySelector('#root');

if (rootDiv)
  createRoot(rootDiv).render(
    <StrictMode>
      <ClearCellList />
    </StrictMode>,
  );

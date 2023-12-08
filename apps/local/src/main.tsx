import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootDiv = document.querySelector('#root');

if (rootDiv) createRoot(rootDiv).render(<StrictMode />);

import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import CellItem from './CellItem';

describe('cell item', () => {
  it('should render an article', () => {
    render(<CellItem />);

    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});

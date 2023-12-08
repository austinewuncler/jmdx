import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { $cells } from '~/cells/state';
import { createCells } from '~/cells/utils';

import CellList from './CellList';

describe('cell-list', () => {
  it('should render cell list items', () => {
    $cells.set(createCells(['jsx', 'md']));
    render(<CellList />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});

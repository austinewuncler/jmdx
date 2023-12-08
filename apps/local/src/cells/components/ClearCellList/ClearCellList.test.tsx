import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { $cells } from '~/cells/state';
import { createCells } from '~/cells/utils';

import ClearCellList from './ClearCellList';

describe('clear cell-list', () => {
  it('should clear cell-list when clicked', async () => {
    $cells.set(createCells(['jsx', 'md']));

    expect($cells).toHaveLength(2);

    const { click } = userEvent.setup();
    render(<ClearCellList />);
    await click(screen.getByRole('button', { name: 'clear cell-list' }));

    expect($cells).toHaveLength(0);
  });
});

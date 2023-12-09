import { screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '~/__test__/utils';

import CellHeader from './CellHeader';

describe('cell header', () => {
  it('should render the cell action buttons', () => {
    renderWithProviders(<CellHeader />);

    expect(
      screen.getAllByRole('button', { name: /^move cell (?:down|up)$/u }),
    ).toHaveLength(2);
    expect(
      screen.getByRole('button', { name: 'remove cell' }),
    ).toBeInTheDocument();
  });
});

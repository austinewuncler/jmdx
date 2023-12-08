import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { $cells, CellSyntax } from '~/cells/state';

import InsertCell from './InsertCell';

describe('insert cell', () => {
  beforeEach(() => {
    $cells.splice(0);
  });

  afterEach(() => {
    cleanup();
  });

  describe('jsx', () => {
    it('should insert jsx cell when clicked', async () => {
      expect($cells).toHaveLength(0);

      const { click } = userEvent.setup();
      render(<InsertCell />);
      await click(screen.getByRole('button', { name: 'insert react cell' }));

      expect($cells).toHaveLength(1);
      expect($cells.at(0)?.syntax).toBe<CellSyntax>('jsx');
    });
  });

  describe('md', () => {
    it('should insert md cell when clicked', async () => {
      expect($cells).toHaveLength(0);

      const { click } = userEvent.setup();
      render(<InsertCell />);
      await click(screen.getByRole('button', { name: 'insert markdown cell' }));

      expect($cells).toHaveLength(1);
      expect($cells.at(0)?.syntax).toBe<CellSyntax>('md');
    });
  });
});

import { observable } from '@legendapp/state';
import { render, screen } from '@testing-library/react';
import { nanoid } from 'nanoid';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { Cell, CellObservable } from '~/cells/state';

import CellItem from './CellItem';

describe('cell item', () => {
  it('should render an article', () => {
    const $cell = observable<Cell[]>([
      { code: '', id: nanoid(), syntax: 'jsx' },
    ])[0] as CellObservable;
    render(<CellItem $cell={$cell} />);

    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});

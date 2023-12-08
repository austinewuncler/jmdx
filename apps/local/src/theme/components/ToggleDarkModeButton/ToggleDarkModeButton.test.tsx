import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { $isDarkMode } from '~/theme/state';

import ToggleDarkModeButton from './ToggleDarkModeButton';

describe('toggle dark theme button', () => {
  it('should toggle dark mode when clicked', async () => {
    const isDarkMode = $isDarkMode.peek();
    const { click } = userEvent.setup();
    render(<ToggleDarkModeButton />);
    await click(screen.getByRole('button', { name: 'toggle dark mode' }));

    expect($isDarkMode.peek()).not.toBe(isDarkMode);
  });
});

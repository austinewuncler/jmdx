import React from 'react';

import { $cells } from '~/cells/state';

import { ClearAllIcon } from '../icons';

const clearCellList = () => {
  $cells.splice(0);
};

const ClearCellListButton = () => (
  <button
    className="text-primary-light"
    onClick={clearCellList}
    title="clear cell-list"
    type="button"
  >
    <ClearAllIcon />
  </button>
);

export default ClearCellListButton;

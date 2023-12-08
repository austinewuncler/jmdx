import React from 'react';

import { $cells } from '~/cells/state';
import { Button } from '~/common/components';

import { ClearAllIcon } from '../icons';

const clearCellList = () => {
  $cells.splice(0);
};

const ClearCellListButton = () => (
  <Button
    className="text-primary-light dark:text-primary-dark transition-colors"
    onClick={clearCellList}
    title="clear cell-list"
  >
    <ClearAllIcon />
  </Button>
);

export default ClearCellListButton;

import React from 'react';

import { $cells } from '~/cells/state';

const clearCellList = () => {
  $cells.splice(0);
};

const ClearCellList = () => (
  <button onClick={clearCellList} title="clear cell-list" type="button" />
);

export default ClearCellList;

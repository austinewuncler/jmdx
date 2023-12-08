import { observer } from '@legendapp/state/react';
import React from 'react';

import { $cells } from '~/cells/state';

import { CellItem } from '../CellItem';
import { InsertCell } from '../InsertCell';

const CellList = observer(() => (
  <ul className="flex flex-col gap-4">
    {$cells.map((cell, index) => (
      <li key={cell.id.peek()}>
        <CellItem />
        <InsertCell index={index + 1} />
      </li>
    ))}
  </ul>
));

export default CellList;

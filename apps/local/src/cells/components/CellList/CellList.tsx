import { observer } from '@legendapp/state/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import { $cells } from '~/cells/state';

import { CellItem } from '../CellItem';
import { InsertCell } from '../InsertCell';

const CellList = observer(() => (
  <ul className="flex flex-col gap-4">
    <AnimatePresence>
      {$cells.map(($cell, index) => (
        <motion.li
          animate={{ opacity: 1, scale: 1, transition: { type: 'tween' } }}
          className="flex flex-col gap-4"
          exit={{ opacity: 0, scale: 0, transition: { type: 'tween' } }}
          initial={{ opacity: 0, scale: 0 }}
          key={$cell.id.peek()}
          layout
        >
          <CellItem $cell={$cell} />
          <InsertCell index={index + 1} />
        </motion.li>
      ))}
    </AnimatePresence>
  </ul>
));

export default CellList;

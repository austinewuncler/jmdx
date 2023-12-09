import React, { useMemo } from 'react';

import { cellItemContext } from '~/cells/context';
import { CellObservable } from '~/cells/state';

import { CellHeader } from '../CellHeader';

interface Props {
  readonly $cell: CellObservable;
}

const CellItem = ({ $cell }: Props) => (
  <cellItemContext.Provider value={useMemo(() => ({ $cell }), [$cell])}>
    <article className="border-primary-light dark:border-primary-dark overflow-hidden rounded border transition-colors">
      <CellHeader />
    </article>
  </cellItemContext.Provider>
);

export default CellItem;

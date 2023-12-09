import { useContext } from 'react';
import invariant from 'tiny-invariant';

import { cellItemContext } from './context';

export default () => {
  const { $cell } = useContext(cellItemContext);
  invariant(
    $cell,
    `'useCellObservable' must be wrapped in a '<cellItemContext.Provider />'`,
  );

  return $cell;
};

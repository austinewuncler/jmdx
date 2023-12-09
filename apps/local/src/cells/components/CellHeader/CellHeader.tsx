import { Show } from '@legendapp/state/react';
import React from 'react';

import useCellObservable from '~/cells/useCellObservable';
import { Button } from '~/common/components';

import { MarkdownIcon, ReactIcon } from '../icons';

const CellHeader = () => {
  const { syntax: $syntax } = useCellObservable();

  return (
    <div className="bg-accent-light dark:bg-accent-dark flex items-center justify-between p-1 transition-colors">
      <Show else={<MarkdownIcon size={24} />} if={$syntax.peek() === 'jsx'}>
        <ReactIcon size={24} />
      </Show>
      <div>
        <Button title="move cell up" />
        <Button title="move cell down" />
        <Button title="remove cell" />
      </div>
    </div>
  );
};

export default CellHeader;

import { nanoid } from 'nanoid';
import React, { useCallback } from 'react';

import { $cells, CellSyntax } from '~/cells/state';
import { Button } from '~/common/components';

import { MarkdownIcon, PlusIcon, ReactIcon } from '../icons';

interface Props {
  readonly index?: number;
}

const InsertCell = ({ index = 0 }: Props) => {
  const insertCell = useCallback(
    (syntax: CellSyntax) => () => {
      $cells.splice(index, 0, { code: '', id: nanoid(), syntax });
    },
    [index],
  );

  return (
    <div className="flex items-center justify-center gap-1">
      <Button onClick={insertCell('jsx')} title="insert react cell">
        <ReactIcon size={32} />
      </Button>
      <PlusIcon />
      <Button onClick={insertCell('md')} title="insert markdown cell">
        <MarkdownIcon size={32} />
      </Button>
    </div>
  );
};

export default InsertCell;

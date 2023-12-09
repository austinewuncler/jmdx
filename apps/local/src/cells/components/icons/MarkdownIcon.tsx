import React from 'react';

interface Props {
  readonly size: number;
}

const MarkdownIcon = ({ size }: Props) => (
  <svg
    className="text-background-dark dark:text-background-light transition-colors"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.553 18.15H3.447a1.443 1.443 0 0 1-1.442-1.441V7.291c0-.795.647-1.441 1.442-1.441h17.105c.795 0 1.442.646 1.442 1.441v9.418a1.441 1.441 0 0 1-1.441 1.441zM6.811 15.268V11.52l1.922 2.402l1.922-2.402v3.748h1.922V8.732h-1.922l-1.922 2.403l-1.922-2.403H4.889v6.535h1.922zM19.688 12h-1.922V8.732h-1.923V12h-1.922l2.884 3.364L19.688 12z"
      fill="currentColor"
    />
  </svg>
);

export default MarkdownIcon;

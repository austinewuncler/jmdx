import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

const Button = ({ className: cls, ...props }: Props) => (
  <button
    className={clsx(cls, 'focus-visible:outline-none')}
    type="button"
    {...props}
  />
);

export default Button;

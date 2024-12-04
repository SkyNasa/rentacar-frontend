import clsx from 'clsx';

import { IMenuToggleProps } from './';

const MenuToggle = ({
  className,
  hasItemSub = false,
  handleToggle,
  children,
  style
}: IMenuToggleProps) => {
  if (hasItemSub) {
    return (
      <div
        className={clsx('menu-toggle', className && className)}
        style={style}
        onClick={handleToggle}
      >
        {children}
      </div>
    );
  } else {
    return (
      <div className={clsx('menu-toggle', className && className)} style={style}>
        {children}
      </div>
    );
  }
};

export { MenuToggle };

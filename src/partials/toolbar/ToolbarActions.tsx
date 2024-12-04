import { IToolbarActionsProps } from './types';

const ToolbarActions = ({ children }: IToolbarActionsProps) => {
  return <div className="flex items-center gap-0">{children}</div>;
};

export { ToolbarActions };

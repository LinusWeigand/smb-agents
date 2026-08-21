import type { ReactNode } from 'react';
import { cn } from '../lib/utils';

export function Container({
  children,
  className,
  wrapperClassName,
}: {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
}) {
  return (
    <div className={cn('relative w-full', wrapperClassName)}>
      <div className={cn('relative', className)}>{children}</div>
    </div>
  );
}

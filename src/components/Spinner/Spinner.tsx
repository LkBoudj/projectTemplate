import React from 'react';
import SpinnerIcon from '@/icons/SpinnerIcon';
import { cn } from '@/utils/helpers';
// Assuming you use this utility for class merging

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 16,
  md: 24,
  lg: 32,
} as const;

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = 'md', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center justify-center', className)}
        {...props}
      >
        <SpinnerIcon
          size={sizeMap[size]}
          className="animate-spin text-primary"
        />
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';

export default Spinner
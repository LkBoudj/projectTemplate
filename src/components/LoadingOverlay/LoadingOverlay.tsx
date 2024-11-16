import { cn } from '@/utils/helpers';
import React from 'react';
import Spinner from '../Spinner';


export interface LoadingOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Controls the visibility of the overlay
   */
  visible: boolean;
  /**
   * Z-index of the overlay
   * @default 1000
   */
  zIndex?: number;
  /**
   * Overlay customization props
   */
  overlayProps?: {
    /**
     * Border radius of the overlay
     * @default 'sm'
     */
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    /**
     * Blur intensity of the backdrop
     * @default 2
     */
    blur?: 0 | 1 | 2 | 3;
  };
}

const LoadingOverlay = React.forwardRef<HTMLDivElement, LoadingOverlayProps>(
  ({ 
    visible, 
    zIndex = 1000, 
    overlayProps = { radius: 'sm', blur: 2 },
    className,
    ...props 
  }, ref) => {
    if (!visible) return null;

    return (
      <div
        ref={ref}
        className={cn(
          'fixed inset-0 bg-white/80 flex justify-center items-center',
          {
            'rounded-none': overlayProps.radius === 'none',
            'rounded-sm': overlayProps.radius === 'sm',
            'rounded-md': overlayProps.radius === 'md',
            'rounded-lg': overlayProps.radius === 'lg',
            'rounded-full': overlayProps.radius === 'full',
          },
          `backdrop-blur-${overlayProps.blur}`,
          className
        )}
        style={{ zIndex }}
        {...props}
      >
        <Spinner size="lg" />
      </div>
    );
  }
);

LoadingOverlay.displayName = 'LoadingOverlay'; 

export default LoadingOverlay;

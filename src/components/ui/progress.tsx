import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
        activeStateClass?: string
    }
>(({ className, value, activeStateClass, ...props }, ref) => (
    <ProgressPrimitive.Root
        ref={ref}
        className={cn(
            'relative h-2 w-full mr-3 overflow-hidden rounded-full bg-gray-200',
            className,
        )}
        {...props}
    >
        <ProgressPrimitive.Indicator
            className={`relative flex-grow h-2 rounded-full ${activeStateClass} bg-primary`}
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
    </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }

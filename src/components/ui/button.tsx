import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex w-fit items-center justify-center whitespace-nowrap rounded-lg text-md font-semibold transition-colors focus:ring-utility-brand-700 focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'shadow-btn bg-primary border-2 border-white border-opacity-10 text-white hover:bg-utility-brand-700 hover:border-utility-brand-700 disabled:text-tertiary-400 disabled:bg-tertiary disabled:border-gray-200 disabled:shadow-none',
                primary:
                    'bg-border-brand hover:bg-brand-secondary-700 rounded-lg shadow hover:shadow-inner',
                destructive:
                    'shadow-btn bg-error-600 border-2 border-white border-opacity-10 text-white hover:bg-error-700 hover:border-error-700 disabled:text-tertiary-400 disabled:bg-tertiary disabled:border-gray-200 disabled:shadow-none',
                light_blue_bg:
                    'bg-brand-secondary-600 text-base text-primary-foreground rounded-lg hover:bg-brand-secondary-600/90',
                outline:
                    'border border-input bg-background hover:bg-utility-gray-50 hover:text-accent-foreground disabled:text-tertiary-400',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-utility-gray-50 hover:text-utility-gray-700',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-10 px-3 py-2',
                sm: 'h-9 rounded-lg px-3',
                lg: 'h-11 rounded-lg px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    },
)
Button.displayName = 'Button'

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }

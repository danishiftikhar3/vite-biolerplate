import * as React from 'react'
import { cn } from '@/lib/utils'
import { NumericFormat } from 'react-number-format'

export interface InputProps {
    value?: number | string
    currency?: string
    decimalScale?: number
    showCurrencySymbol?: boolean
    percentage?: boolean
    onChange?: (value: number) => void
    className?: string
    disabled?: boolean
    showIcon?: boolean
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            value = 0,
            currency,
            decimalScale = 2,
            showCurrencySymbol = false,
            percentage = false,
            className,
            onChange,
            disabled = false,
            showIcon = true,
        },
        ref,
    ) => {
        const euro = currency === 'EUR'

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (!onChange) {
                return
            }
            const val = Number(e.target.value.replace(/,/g, ''))

            if (isNaN(val) || val < 1) {
                console.error(
                    `Invalid value for input in InputWithIcon, value: ${val}`,
                )
                onChange(1)

                return
            }

            onChange(val)
        }

        const icon = percentage ? (
            <span>%</span>
        ) : euro ? (
            <span>€</span>
        ) : (
            <span>$</span>
        )

        return (
            <div
                className={`flex h-11 text-base ${disabled ? 'bg-secondary dark:bg-transparent disabled:opacity-50' : ''}`}
            >
                {showIcon && (
                    <div className='border border-r-0 border-input rounded-tl-lg text-tertiary-600 rounded-bl-lg py-2.5 pr-3 pl-3.5 dark:text-dark-tertiary-600'>
                        {icon}
                    </div>
                )}

                <NumericFormat
                    value={Number(value)}
                    // thousandSeparator={euro ? "." : ","}
                    thousandSeparator={','}
                    decimalScale={decimalScale}
                    // decimalSeparator={euro ? "," : "."}
                    decimalSeparator={'.'}
                    suffix={
                        showIcon
                            ? ''
                            : !euro && showCurrencySymbol
                              ? '$'
                              : percentage
                                ? '%'
                                : ''
                    }
                    prefix={
                        showIcon ? '' : euro && showCurrencySymbol ? '€' : ''
                    }
                    className={cn(
                        'flex-1 w-full rounded-tr-lg rounded-br-lg border border-input py-2.5 px-3.5 text-primary-900 bg-transparent ring-offset-primary placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-100  dark:text-dark-primary-900 ',
                        className,
                    )}
                    onChange={handleChange}
                    disabled={disabled}
                />
            </div>
        )
    },
)

InputWithIcon.displayName = 'Input'

export { InputWithIcon }

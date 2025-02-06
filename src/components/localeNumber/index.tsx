import { NumericFormat } from 'react-number-format'

interface LocaleNumberProps {
    value: number | string
    currency: string | null
    decimalScale?: number
    showCurrencySymbol?: boolean
    percentage?: boolean
}

export default function LocaleNumber({
    value = 0,
    currency,
    decimalScale = 2,
    showCurrencySymbol = false,
    percentage = false,
}: LocaleNumberProps) {
    const euro = currency === 'EUR'
    let num = Number(value)
    if (isNaN(Number(num))) {
        num = 0
    }

    if (percentage) {
        return (
            <NumericFormat
                value={num}
                thousandSeparator={','}
                // thousandSeparator={euro ? "." : ","}
                decimalScale={decimalScale}
                // decimalSeparator={euro ? "," : "."}
                decimalSeparator={'.'}
                suffix={'%'}
                displayType='text'
            />
        )
    }

    const absValue = Math.abs(Number(num))
    if (absValue >= 1000 && absValue < 1000000) {
        return (
            <NumericFormat
                value={Number(num) / 1000}
                // thousandSeparator={euro ? "." : ","}
                thousandSeparator={','}
                decimalScale={decimalScale}
                // decimalSeparator={euro ? "," : "."}
                decimalSeparator={'.'}
                suffix={
                    !euro && showCurrencySymbol ? 'K$' : percentage ? '%' : 'K'
                }
                prefix={euro && showCurrencySymbol ? '€' : ''}
                displayType='text'
            />
        )
    } else if (absValue >= 1000000 && absValue < 1000000000) {
        return (
            <NumericFormat
                value={Number(num) / 1000000}
                // thousandSeparator={euro ? "." : ","}
                thousandSeparator={','}
                decimalScale={decimalScale}
                // decimalSeparator={euro ? "," : "."}
                decimalSeparator={'.'}
                suffix={
                    !euro && showCurrencySymbol ? 'M$' : percentage ? '%' : 'M'
                }
                prefix={euro && showCurrencySymbol ? '€' : ''}
                displayType='text'
            />
        )
    } else if (absValue >= 1000000000) {
        return (
            <NumericFormat
                value={Number(num) / 1000000000}
                // thousandSeparator={euro ? "." : ","}
                thousandSeparator={','}
                decimalScale={decimalScale}
                // decimalSeparator={euro ? "," : "."}
                decimalSeparator={'.'}
                suffix={
                    !euro && showCurrencySymbol ? 'B$' : percentage ? '%' : 'B'
                }
                prefix={euro && showCurrencySymbol ? '€' : ''}
                displayType='text'
            />
        )
    }

    return (
        <NumericFormat
            value={Number(num)}
            // thousandSeparator={euro ? "." : ","}
            thousandSeparator={','}
            decimalScale={decimalScale}
            // decimalSeparator={euro ? "," : "."}
            decimalSeparator={'.'}
            suffix={!euro && showCurrencySymbol ? '$' : percentage ? '%' : ''}
            prefix={euro && showCurrencySymbol ? '€' : ''}
            displayType='text'
        />
    )
}

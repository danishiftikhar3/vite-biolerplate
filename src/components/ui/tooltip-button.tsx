import React, { ReactElement } from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'

interface ButtonWithTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactElement
    tooltip: string
}

const ButtonWithTooltip = ({
    children,
    tooltip,
    ...rest
}: ButtonWithTooltipProps) => (
    <Tooltip>
        <TooltipTrigger className='rounded-lg'>
            <div {...rest}>{children}</div>
        </TooltipTrigger>
        <TooltipContent className='px-3 py-2 bg-primary-solid text-white text-xs font-semibold'>
            <span>{tooltip}</span>
        </TooltipContent>
    </Tooltip>
)

export default ButtonWithTooltip

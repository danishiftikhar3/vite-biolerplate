import * as Slider from '@radix-ui/react-slider'
import { title } from 'process'
import React from 'react'

type RenderSliderProps = {
    values: [number, number]
    onChange: (values: [number, number]) => void
    isPercentage?: boolean
    isRightSliderFixed?: boolean
    max: number
    min: number
    step?: number
    minStepsBetweenThumbs?: number
    title: string
}

function TwoWaySlider({
    values,
    onChange,
    isPercentage = false,
    isRightSliderFixed = false,
    max,
    min,
    step = 1,
    minStepsBetweenThumbs = 1,
    title,
}: RenderSliderProps) {
    return (
        <div className='flex items-center gap-4 mb-8'>
            <div className='w-40 text-secondary-700 text-sm font-medium leading-tight'>
                {title}
            </div>
            <div className='flex-grow px-6'>
                <Slider.Root
                    className='relative flex items-center w-full'
                    value={values}
                    onValueChange={onChange}
                    min={min}
                    max={max}
                    step={step}
                    aria-label={'review'}
                    minStepsBetweenThumbs={minStepsBetweenThumbs}
                >
                    <Slider.Track className='relative flex-grow h-2 bg-gray-200 rounded-full'>
                        <Slider.Range className='absolute h-full bg-primary rounded-full' />
                    </Slider.Track>
                    {/* Left Thumb */}
                    <Slider.Thumb className='block w-4 h-4 bg-white border-2 border-primary rounded-full shadow-md cursor-pointer'>
                        <div className='text-gray-900 text-base mt-6 font-medium leading-normal flex'>
                            <span>{values[0]}</span>
                            <span>{isPercentage ? '%' : ''}</span>
                        </div>
                    </Slider.Thumb>
                    {/* Right Thumb */}
                    <Slider.Thumb
                        className={`block w-4 h-4 bg-white border-2 border-primary rounded-full shadow-md ${
                            isRightSliderFixed
                                ? 'cursor-not-allowed'
                                : 'cursor-pointer'
                        }`}
                    >
                        <div className='text-gray-900 text-base mt-6 font-medium leading-normal'>
                            {values[1]}
                            {isPercentage ? '%' : ''}
                        </div>
                    </Slider.Thumb>
                </Slider.Root>
            </div>
        </div>
    )
}

export default TwoWaySlider

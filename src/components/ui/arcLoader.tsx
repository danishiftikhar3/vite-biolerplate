import ArcProgress from 'react-arc-progress'

const NORMAL_SIZE = 37
const LARGE_SIZE = 64
const fillColor = '#878CEE'

export default function ArcLoader({
    progress,
    large,
    isDisabled,
}: {
    progress: number
    large?: boolean
    isDisabled?: boolean
}) {
    let fillColor
    if (progress >= 0 && progress <= 40) {
        fillColor = '#d92c20'
    } else if (progress > 40 && progress <= 60) {
        fillColor = '#db6803'
    } else if (progress > 60 && progress <= 80) {
        fillColor = '#2e90fa'
    } else if (isDisabled) {
        fillColor = '#CDC8C3'
    } else {
        fillColor = '#069454'
    }

    const size = large ? LARGE_SIZE : NORMAL_SIZE

    return (
        <div className='relative h-full'>
            <div style={{ width: size, height: size / 2 }}>
                <ArcProgress
                    progress={isDisabled ? 0 : progress / 100}
                    size={large ? LARGE_SIZE : NORMAL_SIZE}
                    thickness={4}
                    emptyColor={isDisabled ? fillColor : '#d0d5dd'}
                    fillColor={fillColor}
                    arcStart={180}
                    arcEnd={360}
                />
                <div
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 text-center ${large ? 'text-[14px] leading-[8px]' : 'text-[10px] leading-[6px]'} font-semibold`}
                    style={{ color: fillColor }}
                >
                    {isDisabled ? 'n/a' : progress}
                </div>
            </div>
        </div>
    )
}

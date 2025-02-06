import { useRouter } from '@tanstack/react-router'
import { useEffect } from 'react'

function NotFound() {
    const router = useRouter()

    useEffect(() => {
        const handlePopState = (event: PopStateEvent): void => {
            // Intercept the back button and navigate two steps back
            window.history.go(-2)
            event.preventDefault() // Prevents default single-step back behavior
        }

        // Attach event listener for popstate
        window.addEventListener('popstate', handlePopState)

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('popstate', handlePopState)
        }
    }, [router])
    return (
        <section className='h-screen flex items-center justify-center'>
            <div className='max-w-7xl flex items-center mx-auto px-8'>
                <div className='w-1/2 mr-12'>
                    <h3 className='mb-5 text-sm md:text-base font-semibold text-brand-secondary-700'>
                        404 error
                    </h3>
                    <h1 className='mb-10 text-4xl text-primary-900 font-semibold leading-[44px] md:text-5xl lg:text-6xl md:leading-[60px] lg:leading-[72px]'>
                        The page you're looking for can't be found
                    </h1>
                    <p className='text-lg md:text-xl mb-8 md:mb-12 leading-7 text-text-tertiary'>
                        Sorry, the page you are looking for doesn't exist.
                    </p>
                    <div>
                        <a href='/'>Go to Homepage</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound

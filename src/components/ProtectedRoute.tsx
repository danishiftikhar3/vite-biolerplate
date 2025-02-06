import { ReactNode, useEffect, useState } from 'react'
import { Navigate } from '@tanstack/react-router'
import { Spinner } from '@/components/ui/spinner'

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const [authToken, setAuthToken] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const token = localStorage.getItem('token')
        setAuthToken(token)
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <div className='w-full min-h-screen flex items-center justify-center text-primary-900 text-lg'>
                <Spinner />
                &nbsp;Loading...
            </div>
        )
    }

    if (!authToken) {
        return <Navigate to='/login' />
    }

    return children
}

export default ProtectedRoute

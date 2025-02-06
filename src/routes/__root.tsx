import OutletWithLoading from '@/components/OutletWithLoading'
import ProtectedRoute from '@/components/ProtectedRoute'

import { QueryClient } from '@tanstack/react-query'
import {
    Navigate,
    ScrollRestoration,
    createRootRouteWithContext,
} from '@tanstack/react-router'
// import { AuthProvider, useAuth } from '@/contexts/auth.context'

interface MyRouterContext {
    queryClient: QueryClient
}

const RootComponent = () => {
    // const location = useLocation() // Use TanStack Router's useLocation
    // const { pathname } = location // Get current pathname from router
    // const isNoAuthPage = [
    //     '/login',
    //     '/signup',
    //     '/email-verification',
    //     '/email-verified',
    //     '/forgot-password',
    //     '/email-link-verification',
    //     '/reset-password',
    //     '/404',
    // ].includes(pathname)

    // if (isNoAuthPage) {
    //     return (
    //         <>
    //             <ScrollRestoration />
    //             <Outlet />
    //         </>
    //     )
    // }

    // if (pathname.includes('/asset-valuation-report')) {
    //     return <Outlet />
    // }

    return (
        <>
            <ScrollRestoration />

            <main className='flex'>
                <OutletWithLoading />
            </main>
        </>
    )
}

const routeComponents =
    import.meta.env.MODE === 'preview' || import.meta.env.MODE === 'production'
        ? {
              component: RootComponent,
              notFoundComponent: () => <NotFoundComponent />,
          }
        : {
              component: RootComponent,
          }

export const Route = createRootRouteWithContext<MyRouterContext>()({
    ...routeComponents,
})

const NotFoundComponent = () => {
    // const { user } = useAuth()
    // if (user) {
    //     return <Navigate to='/404' />
    // }
    return <Navigate to='/404' />
}

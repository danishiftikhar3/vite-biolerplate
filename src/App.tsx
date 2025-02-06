// import { AuthProvider } from '@/contexts/auth.context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { Toaster } from 'sonner'

import 'react-day-picker/dist/style.css'
import { TooltipProvider } from './components/ui/tooltip'
import { routeTree } from './routeTree.gen'

const queryClient = new QueryClient()

const router = createRouter({
    routeTree: routeTree,
    context: {
        queryClient,
    },
})

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <RouterProvider router={router} />
                <Toaster
                    position='top-right'
                    expand
                    icons={
                        {
                            // success: <AlertIcon />,
                        }
                    }
                    duration={2000}
                    closeButton
                    toastOptions={{
                        classNames: {
                            icon: 'w-[38px] flex justify-center',
                            content: 'pr-4',
                            closeButton:
                                'left-auto right-0 -translate-x-2/4 -translate-y-2/4 top-2/4',
                        },
                    }}
                />
            </TooltipProvider>
        </QueryClientProvider>
    )
}

export default App

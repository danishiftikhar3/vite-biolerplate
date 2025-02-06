import { Outlet } from '@tanstack/react-router'
import LoadingScreen from '../loadingScreen'

/* 
This component is parent of all the components.. 
This will be rendered first
This is created to make sure essential things are loaded first 
*/

function OutletWithLoading() {
    const isLoading = false

    // const { data, isLoading: } = useQuery({
    //     queryKey: [],
    //     queryFn: async () => {
    //         const data = await func()
    //         return data
    //     },
    //     refetchOnWindowFocus: false,
    // })

    if (isLoading) {
        return <LoadingScreen />
    }

    return <Outlet />
}

export default OutletWithLoading

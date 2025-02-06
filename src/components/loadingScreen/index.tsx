import './loadingScreen.css'

const LoadingScreen = ({ text = 'Loading...' }: { text?: string }) => {
    return (
        <div className='loading-screen'>
            {/* <img src='/images/logo.png' alt='Logo' className='logo' /> */}
            <h1 className='text-xl'>loading</h1>
        </div>
    )
}

export default LoadingScreen

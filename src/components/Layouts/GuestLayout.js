import Head from 'next/head'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="font-sans text-gray-900 antialiased">
                {children}
                <div className={'fixed inset-0 w-full bg-blueDark opacity-90 -z-10'}/>
                <div className={'fixed inset-0 bg-cover -z-20'} style={{backgroundImage: `url('images/bg-explorer.png')`}}/>
            </div>
        </div>
    )
}

export default GuestLayout

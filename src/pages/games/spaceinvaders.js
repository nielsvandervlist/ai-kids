import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import Script from 'next/script'

export default function SpaceInvaders(){
    return <AppLayout
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        }>
        <Head>
            <title>Laravel - Dashboard</title>
        </Head>

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-12">
                <div>
                    <Script src="https://cdn.htmlgames.com/NeonBreaker/"/>
                </div>
            </div>
        </div>
        <div className={'fixed inset-0 bg-blueDark opacity-80 -z-10'}/>
        <div className={'fixed inset-0 bg-cover bg-center -z-20'} style={{backgroundImage: `url('../images/bg.png')`}}/>
    </AppLayout>
}

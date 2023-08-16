import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import gameOne from '../../public/images/game-1.png'
import gameTwo from '../../public/images/game-2.png'
import gameThree from '../../public/images/game-3.png'
import CardGame from '@/components/Cards/CardGame'
import Image from 'next/image'
import InternalLink from '@/components/Links/InternalLink'

const Dashboard = () => {

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>
            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <div className="relative">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-12 gap-10 mb-12">
                    <div className={'col-span-12 flex ml-auto'}>
                        <InternalLink href={'/'} className={'btn--orange-fill ml-auto'}>Unlock new games</InternalLink>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-12 gap-20">
                    <div className={'col-span-4'}>
                        <h2 className={'label label--orange mb-8'}>Quiz</h2>
                        <CardGame href={'/'} name={'test'} level={1}>
                            <Image className={'w-full'} src={gameOne} alt={'game-1'}/>
                        </CardGame>
                    </div>
                    <div className={'col-span-4'}>
                        <h2 className={'label label--orange mb-8'}>Coding</h2>
                        <CardGame href={'/'} name={'test'} level={1}>
                            <Image className={'w-full'} src={gameTwo} alt={'game-1'}/>
                        </CardGame>
                    </div>
                    <div className={'col-span-4'}>
                        <h2 className={'label label--orange mb-8'}>Space invaders</h2>
                        <CardGame href={'/'} name={'test'} level={1}>
                            <Image className={'w-full'} src={gameThree} alt={'game-1'}/>
                        </CardGame>
                    </div>
                </div>
            </div>
            <div className={'fixed inset-0 bg-blueDark opacity-80 -z-10'}/>
            <div className={'fixed inset-0 bg-cover bg-center -z-20'}
                 style={{backgroundImage: `url('images/bg.png')`}}/>
        </AppLayout>
    )
}

export default Dashboard

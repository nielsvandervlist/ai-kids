import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import CardInfo from '@/components/Cards/CardInfo'
import Card from '@/components/Cards/Card'
import InternalLink from '@/components/Links/InternalLink'
import bg from '../../public/images/bg.png'
import List from '@/components/Lists/List'
import {useIndex} from 'ra-fetch'

const Dashboard = () => {

    const [missions, setMissions] = useIndex('missions')

    if (missions.loading) {
        return <></>
    }

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

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-12">
                    <div className={'col-span-5'}>
                        <CardInfo>
                            <h1 className={'label mb-8'}>Welcome username</h1>
                            <span className={'card-line mb-8 w-full block'}/>
                            <p className={'text mb-8'}>Welcome to the AI Kids Learning Platform, where young minds
                                embark on a captivating journey into the world of artificial intelligence! Our platform
                                offers an interactive and engaging way to learn about AI concepts and their real-world
                                applications.</p>
                            <p className={'text mb-8'}>Join us in unraveling the mysteries of AI and discovering how
                                it's shaping the world around us. Let's learn, create, and explore the endless
                                possibilities of artificial intelligence together!</p>
                            <InternalLink href={'/'}>Start first mission</InternalLink>
                        </CardInfo>
                    </div>
                    <div className={'col-span-1'}>
                        <span className={'h-10 card-line card-line--line inline-block w-full'}/>
                    </div>
                    <div className={'col-span-6 mt-10'}>
                        <Card>
                            <h1 className={'label label--orange mb-8'}>Missions overview</h1>
                            <List items={missions.data} score/>
                        </Card>
                    </div>
                </div>
            </div>
            <div className={'fixed inset-0 bg-blueDark opacity-90 -z-10'}/>
            <div className={'fixed inset-0 bg-cover bg-center -z-20'}
                 style={{backgroundImage: `url('images/bg.png')`}}/>
        </AppLayout>
    )
}

export default Dashboard

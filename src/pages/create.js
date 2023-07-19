import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import CardInfo from '@/components/Cards/CardInfo'
import Card from '@/components/Cards/Card'
import InternalLink from '@/components/Links/InternalLink'
import bg from '../../public/images/bg.png'
import List from '@/components/Lists/List'

const Dashboard = () => {

    const missions = [
        {
            title: 'Midjourney', href: '/missions/quiz',
        },
        {
            title: 'ChatGPT', href: 'hello1',
        }
    ]

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
                    <div className={'col-span-6 col-start-4 mt-10'}>
                        <Card>
                            <h1 className={'label label--orange mb-8'}>AI websites</h1>
                            <List items={missions}/>
                        </Card>
                    </div>
            </div>
        </div>
    <div className={'fixed inset-0 bg-blueDark opacity-80 -z-10'}/>
    <div className={'fixed inset-0 bg-cover bg-center -z-20'} style={{backgroundImage: `url('images/bg.png')`}}/>
</AppLayout>
)
}

export default Dashboard

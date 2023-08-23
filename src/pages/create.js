import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import CardInfo from '@/components/Cards/CardInfo'
import Card from '@/components/Cards/Card'
import InternalLink from '@/components/Links/InternalLink'
import bg from '../../public/images/bg.png'
import List from '@/components/Lists/List'
import Link from 'next/link'

const Dashboard = () => {

    const missions = [
        {
            title: 'Midjourney', href: '/missions/quiz'
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
                            {
                                missions.map((item, index) => {
                                    return <Link href={item.href} className={'block card card--mission py-[5px] px-[10px] mb-4 text-white uppercase'}>
                                        {item.title}
                                    </Link>
                                })
                            }
                        </Card>
                    </div>
            </div>
        </div>
    <div className={'fixed inset-0 bg-blueDark opacity-90 -z-10'}/>
    <div className={'fixed inset-0 bg-cover bg-center -z-20'} style={{backgroundImage: `url('images/bg.png')`}}/>
</AppLayout>
)
}

export default Dashboard

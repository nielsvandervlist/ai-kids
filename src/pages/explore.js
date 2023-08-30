import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import CardInfo from '@/components/Cards/CardInfo'
import Card from '@/components/Cards/Card'
import InternalLink from '@/components/Links/InternalLink'
import bg from '../../public/images/bg.png'
import List from '@/components/Lists/List'
import Link from 'next/link'

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

            <div className={'fixed inset-0'}>
                <div className={'border-l border-b border-orange w-[100px] h-[200px] absolute left-[170px] -rotate-45 bottom-[40%]'}>
                    <span className={'card card--explore rotate-45 inline-block text-white uppercase absolute -right-[40px] bottom-0'}>
                        <Link href={'/explore'}>Explore</Link>
                    </span>
                </div>
                <div className={'border-l border-b border-orange w-[100px] h-[200px] absolute left-[500px] -rotate-45 top-[160px]'}>
                    <span className={'card card--explore rotate-45 inline-block text-white uppercase absolute -right-[40px] bottom-0'}>
                        <Link href={'/games'}>Games</Link>
                    </span>
                </div>
                <div className={'border-l border-b border-orange w-[100px] h-[200px] absolute left-[810px] -rotate-[130deg] top-[430px]'}></div>
            </div>
             <div className={'fixed inset-0 bg-cover -z-20'} style={{backgroundImage: `url('images/bg-explorer.png')`}}/>
</AppLayout>
)
}

export default Dashboard

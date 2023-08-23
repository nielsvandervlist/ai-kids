import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Card from '@/components/Cards/Card'
import Link from 'next/link'
import {useIndex} from 'ra-fetch'
import UserList from '@/components/Lists/UserList'

export default function LeaderBoard(){

    const [users, setUsers] = useIndex('users', {
        sort: 'points desc'
    })

    if(users.loading){
        return <></>
    }

    console.log(users)

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
                            <h1 className={'label label--orange mb-8'}>Leaderboard</h1>
                            <UserList users={users.data}/>
                        </Card>
                    </div>
                </div>
            </div>
            <div className={'fixed inset-0 bg-blueDark opacity-90 -z-10'}/>
            <div className={'fixed inset-0 bg-cover bg-center -z-20'} style={{backgroundImage: `url('images/bg.png')`}}/>
        </AppLayout>
    )
}

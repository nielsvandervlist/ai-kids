import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import CardInfo from '@/components/Cards/CardInfo'
import InternalLink from '@/components/Links/InternalLink'
import {useRouter} from 'next/router'
import Questions from '@/components/Missions/Questions'
import Score from '@/components/Missions/Score'
import {useStore} from 'ra-fetch'

const Results = () => {

    const router = useRouter()
    const query = router.query

    if(!router.isReady){
        return <></>
    }

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Quiz
                </h2>
            }>
            <Head>
                <title>Laravel - Results</title>
            </Head>

            <div className="py-12">

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-12">
                    <div className={'col-span-6 col-start-4'}>
                        <CardInfo>
                            <h1 className={'label mb-8'}>You are done with the questionaire</h1>
                            <span className={'card-line mb-8 w-full block'}/>
                            <p className={'text mb-8'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <h2 className={'label mb-8'}>Results for mission: {query.pid}</h2>
                            <span className={'card-line mb-8 w-full block'}/>
                            <Score mission_id={query.pid} user_mission_id={query.user_mission_id}/>
                        </CardInfo>
                    </div>
                </div>
            </div>
            <div className={'fixed inset-0 bg-blueDark opacity-80 -z-10'}/>
            <div className={'fixed inset-0 bg-cover bg-center -z-20'}
                 style={{backgroundImage: `url('../../images/bg.png')`}}/>
        </AppLayout>
    )
}

export default Results

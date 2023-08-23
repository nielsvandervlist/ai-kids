import Head from 'next/head'
import CardInfo from '@/components/Cards/CardInfo'
import InternalLink from '@/components/Links/InternalLink'
import Card from '@/components/Cards/Card'
import AppLayout from '@/components/Layouts/AppLayout'
import PromptInput from '@/components/OpenAI/PromptInput'
import {useState} from 'react'
import {useIndex} from 'ra-fetch'

export default function ImageGeneration(){

    const [completion, setCompletion] = useState(true)
    const [mission, setMission] = useIndex('user_missions', {mission_id: 3})

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
                <div className={'col-span-5'}>
                    <CardInfo>
                        <h1 className={'label mb-8'}>This is the title</h1>
                        <span className={'card-line mb-8 w-full block'}/>
                        <p className={'text mb-8'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <InternalLink href={'/'}>Test</InternalLink>
                    </CardInfo>
                </div>
                <div className={'col-span-1'}>
                    <span className={'h-10 card-line card-line--line inline-block w-full'}/>
                </div>
                <div className={'col-span-6 mt-10'}>
                    <Card>
                        <h1 className={'label label--orange mb-8'}>Missions overview</h1>
                        <PromptInput completion={completion} setCompletion={setCompletion}/>
                    </Card>
                </div>
            </div>
        </div>
        <div className={'fixed inset-0 bg-blueDark opacity-90 -z-10'}/>
        <div className={'fixed inset-0 bg-cover bg-center -z-20'} style={{backgroundImage: `url('../images/bg.png')`}}/>
    </AppLayout>
}

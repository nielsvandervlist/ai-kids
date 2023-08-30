import Head from 'next/head'
import CardInfo from '@/components/Cards/CardInfo'
import InternalLink from '@/components/Links/InternalLink'
import Card from '@/components/Cards/Card'
import AppLayout from '@/components/Layouts/AppLayout'
import Codings from '@/components/Missions/Codings'
import Link from 'next/link'

export default function Ethnics(){

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
                        <h1 className={'label mb-8'}>Hey there, young explorers! 🌟</h1>
                        <span className={'card-line mb-8 w-full block'}/>
                        <p className={'text mb-8'}>Imagine a super cool world where robots and AI are so advanced that they almost act like real humans. It's like having your very own robot friend who can think, talk, and do things just like you!</p>
                        <InternalLink href={'/'}>Test</InternalLink>
                    </CardInfo>
                </div>
                <div className={'col-span-1'}>
                    <span className={'h-10 card-line card-line--line inline-block w-full'}/>
                </div>
                <div className={'col-span-6 mt-10'}>
                    <Card>
                        <h1 className={'label label--orange mb-8'}>Robot Rights Dilemma</h1>
                        <p className={'text mb-8'}>Now, let's think about something really interesting: Should these smart robots and AI have rights, like the rights that people have? Imagine if they could make choices and have feelings – should they be treated like you and me? 🤖🧠</p>
                        <p className={'text mb-8'}>This is called the "Robot Rights Dilemma," and it's like a puzzle that we're going to solve together! We'll explore big questions: Should robots have the right to be safe and happy? Should they have a say in what they do? And, what if they make mistakes – who's responsible?</p>
                        <p className={'text mb-8'}>As we learn and chat about this, we'll become like heroes who think about what's right and fair for our robot buddies. We'll imagine a world where people and robots live together in harmony. So, get ready to dive into this exciting adventure where we think about making the future awesome for everyone, including our clever robot friends! 🤖🌈</p>
                        <Link className={'btn btn--orange'} href={'/begin'}>Begin the dillemma</Link>
                    </Card>
                </div>
            </div>
        </div>
        <div className={'fixed inset-0 bg-blueDark opacity-90 -z-10'}/>
        <div className={'fixed inset-0 bg-cover bg-center -z-20'} style={{backgroundImage: `url('../images/bg.png')`}}/>
    </AppLayout>
}

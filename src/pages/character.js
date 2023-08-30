import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import CardInfo from '@/components/Cards/CardInfo'
import {useUpdate} from 'ra-fetch'
import Characters from '@/components/Profile/Characters'
import {useAuth} from '@/hooks/auth'
import {useEffect} from 'react'

const Character = () => {

    const {user} = useAuth({middleware: 'auth'})
    const [profile, setProfile, submitProfile] = useUpdate('users', {
        id: '',
        profile_img: '',
    })

    useEffect(() => {
        if (user?.id) {
            setProfile({
                id: user?.id,
            })
        }
    }, [user])

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Character
                </h2>
            }>
            <Head>
                <title>Laravel - Character</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-12">
                    <div className={'col-span-3'}>
                        <CardInfo>
                            <h1 className={'label mb-8'}>Welcome username</h1>
                            <span className={'card-line mb-8 w-full block'}/>
                            <p className={'text mb-8'}>Welcome to the AI Kids Learning Platform, where young minds
                                embark on a captivating journey into the world of artificial intelligence! Our platform
                                offers an interactive and engaging way to learn about AI concepts and their real-world
                                applications.</p>
                        </CardInfo>
                    </div>
                    <div className={'col-span-1'}>
                        <span className={'h-10 card-line card-line--line inline-block w-full'}/>
                    </div>
                    <div className={'col-span-7 mt-10'}>
                        <Characters setProfile={setProfile} submitProfile={submitProfile}/>
                    </div>
                </div>
            </div>
            <div className={'fixed inset-0 bg-blueDark opacity-90 -z-10'}/>
            <div className={'fixed inset-0 bg-cover bg-center -z-20'}
                 style={{backgroundImage: `url('images/bg.png')`}}/>
        </AppLayout>
    )
}

export default Character

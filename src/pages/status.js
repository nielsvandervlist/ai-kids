import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import CardInfo from '@/components/Cards/CardInfo'
import Card from '@/components/Cards/Card'
import InternalLink from '@/components/Links/InternalLink'
import profile from '../../public/images/profile.png'
import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import FormInput from '@/components/Forms/FormInput'
import SubmitButton from '@/components/Links/SubmitButton'
import List from '@/components/Lists/List'

const Dashboard = () => {

    const missions = [
        {
            title: 'Hello', href: '/missions/quiz',
        },
        {
            title: 'Hello1', href: 'hello1',
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
                    <div className={'col-span-3'}>
                        <Card>
                            <h1 className={'label label--orange mb-8'}>Name of player</h1>
                            <h1 className={'label mb-8'}>Edit your character</h1>
                            <div className={'flex items-center mb-8'}>
                                <Image src={profile} alt={'profile'}/>
                                <div className={'flex ml-8 mt-auto mb-4'}>
                                    <FontAwesomeIcon className={'text-orange'} icon={faStar}/>
                                </div>
                            </div>
                            <FormInput placeholder={'name'}/>
                            <FormInput placeholder={'email'}/>
                            <FormInput placeholder={'password'}/>

                            <SubmitButton id={1} onClick={() => console.log('hello')}>Change profile</SubmitButton>
                        </Card>
                    </div>
                    <div className={'col-span-1'}>
                        <span className={'h-10 card-line card-line--line inline-block w-full'}/>
                    </div>
                    <div className={'col-span-6 mt-10'}>
                        <Card className={'relative mb-8'}>
                            <h1 className={'label label--orange mb-8'}>Points</h1>
                            <p className={'label label--white'}>23 / 25 POINTS HAS BEEN AQUIRED</p>
                            <div className={'absolute top-8 right-8'}>
                                <InternalLink href={'/points'}>Spend points</InternalLink>
                            </div>
                        </Card>
                        <Card>
                            <h1 className={'label label--orange mb-8'}>Acomplished missions</h1>
                            <List items={missions} score/>
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

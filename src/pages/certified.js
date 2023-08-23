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
import {useIndex} from 'ra-fetch'
import Badge from '@/components/Badges/Badge'

const Status = () => {

    const [userMissions, setUserMissions] = useIndex('user_missions', {
        'user_id': 4
    })

    if(userMissions.loading){
        return <></>
    }

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Status
                </h2>
            }>
            <Head>
                <title>Laravel - Badges</title>
            </Head>

            <div className="py-12">
                <div className=" flex mx-auto sm:px-6 lg:px-8">
                    <div className={'mx-auto'}>
                        <Card className={'relative mb-8'}>
                            <h1 className={'label label--orange mb-8'}>You are now certified</h1>
                            <p className={'label label--white'}>You have served us well</p>
                        </Card>
                    </div>
                </div>
            </div>
            <div className={'fixed inset-0 bg-blueDark opacity-90 -z-10'}/>
            <div className={'fixed inset-0 bg-cover bg-center -z-20'} style={{backgroundImage: `url('images/bg.png')`}}/>
        </AppLayout>
    )
}

export default Status

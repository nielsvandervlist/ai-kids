import Image from 'next/image'
import Card from '@/components/Cards/Card'
import {useState} from 'react'
import {useRouter} from 'next/router'
import clsx from 'clsx'

export default function Characters({setProfile, submitProfile}) {

    const router = useRouter()

    function handleSubmit(){
        submitProfile().then((res) => {
            if(!res.errors.length){
                router.push('/dashboard')
            }
        })
    }

    function handleClick(url, index){
        setProfile({'profile_img': url})
        setActive(index)
    }

    const [active, setActive] = useState()

    const characters = [
        {
            url: '/images/avatar-1.png',
        },
        {
            url: '/images/avatar-2.png',
        },
        {
            url: '/images/avatar-3.png',
        },
        {
            url: '/images/avatar-4.png',
        },
        {
            url: '/images/avatar-5.png',
        },
        {
            url: '/images/avatar-6.png',
        },
        {
            url: '/images/avatar-7.png',
        },
        {
            url: '/images/avatar-8.png',
        },
    ]

    return <Card className={'characters flex gap-4 flex-wrap justify-center'}>
        <h2 className={'label label--orange w-full text-center'}>Select your avatar</h2>
        {
            characters.map((item, index) => {

                let color = '';

                if(active === index) {
                    color = 'card--active'
                }

                return <Card className={clsx(color, 'cursor-pointer')} onClick={() => handleClick(item.url, index)}>
                    <Image width={'75'} height={'90'} key={index} src={item.url} alt={'character'}/>
                </Card>
            })
        }
        <button onClick={() => handleSubmit()} className={'btn btn--orange my-8'}>
            Save character
        </button>
    </Card>
}

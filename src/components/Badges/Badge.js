import Image from 'next/image'

export default function Badge({badge}){
    return <div className={'items-center flex flex-col gap-8 p-8'}>
        <Image width={100} height={200} className={`rounded ${badge.done ? 'opacity-100' : 'opacity-40'}`} src={badge.image} alt={'badge'}/>
        <p className={'label label--orange mt-auto'}>{badge.name}</p>
    </div>
}

import clsx from 'clsx'
import InternalLink from '@/components/Links/InternalLink'

export default function CardGame({href, img, level, children, className, name}) {
    return <div className={clsx('card card--game relative', className)}>
        <span className={'level absolute top-8 right-8 text-white inline-block'}><span className={'label font-bold'}>Level {level}</span></span>
        {children}
        <div className={'bottom absolute bottom-0'}>
            <InternalLink className={'w-full text-center'} href={href}>{name}</InternalLink>
        </div>
    </div>
}
